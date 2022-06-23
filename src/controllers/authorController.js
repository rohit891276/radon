const AuthorModel = require('../models/authorModel.js');
const jwt = require('jsonwebtoken');

const createAuthor = async function (req, res) {
  try {
    const authorData = req.body;
    if (Object.keys(authorData).length == 0)
      return res.status(400).send({ status: false, msg: 'enter body' });
    if (!authorData.fname)
      return res.status(400).send({ status: false, msg: 'first name required' });
    if (!authorData.lname)
      return res.status(400).send({ status: false, msg: 'last name required' });
    if (!authorData.title)
      return res.status(400).send({ status: false, msg: 'title required' });
    if (authorData.title != ('Mr' || 'Mrs' || 'Miss'))
      return res.status(400).send({ status: false, msg: 'enter valid title' });
    if (!authorData.email)
      return res.status(400).send({ status: false, msg: 'email required' });
    if (!authorData.password)
      return res.status(400).send({ status: false, msg: 'password required' });
    const savedData = await AuthorModel.create(authorData);
    res.status(201).send({ Status: true, Msg: savedData });
  } catch (err) {
    res.status(500).send({ Status: 'SERVER ERROR', Msg: err.message });
  }
};

const loginAuthor = async function (req, res) {
  try {
    let userName = req.body.emailId;
    if (!userName) return res.status(400).send({ msg: 'please enter emailId' });
    let password = req.body.password;
    if (!password)
      return res.status(400).send({ msg: 'please enter password' });
    let findAuthor = await AuthorModel.findOne({
      email: userName,
      password: password,
    });
    if (!findAuthor)
      return res.status(401).send({
        status: false,
        msg: 'Email and Password not valid',
      });
    let token = jwt.sign(
      {
        authorId: findAuthor._id.toString(),
      },
      'group-21'
    );
    res.setHeader('x-api-key', token);
    res.send({ status: true, token: token });
  } catch (err) {
    res.status(500).send({ Status: 'SERVER ERROR', Msg: err.message });
  }
};

module.exports.createAuthor = createAuthor;
module.exports.loginAuthor = loginAuthor;
