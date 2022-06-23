const AuthorModel = require('../models/authorModel.js');
const jwt = require('jsonwebtoken');

const createAuthor = async function (req, res) {
    try {
        const authorData = req.body;
        if (Object.keys(authorData).length != 0) {
            if (authorData.title != ("Mr" || "Mrs" || "Miss")) { return res.status(400).send({ msg: "Please select title from (Mr, Mrs, Miss) these options only." }) }
            const savedData = await AuthorModel.create(authorData);

            res.status(201).send({ Status: true, Msg: savedData });
        } else {
            res.status(400).send({ Status: false, Msg: 'BAD REQUEST' });
        }
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