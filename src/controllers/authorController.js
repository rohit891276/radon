const AuthorModel = require('../models/authorModel.js');
const jwt = require('jsonwebtoken');

const createAuthor = async function (req, res) {
    try {
        const authorData = req.body;
        if (Object.keys(authorData).length != 0) {
            let nameRegex = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
            let mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            let passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

            if (!(nameRegex.test(authorData.fname)) || !(nameRegex.test(authorData.lname))) {
                return res.status(405).send({ msg: "Please enter valid characters only in fname and lname" })
            }

            if (!(mailRegex.test(authorData.email))) {
                return res.status(405).send({ msg: "Please enter valid mailId" })
            }

            if (!(passRegex.test(authorData.password))) {
                return res.status(405).send({ msg: "Please enter a password which contains min 8 letters, at least a symbol, upper and lower case letters and a number" })
            }

            if (authorData.title != ("Mr" || "Mrs" || "Miss")) { return res.status(400).send({ msg: "Please select title from (Mr, Mrs, Miss) these options only." }) }

            const savedData = await AuthorModel.create(authorData);
            res.status(201).send({ Status: true, Msg: savedData });
        } else {
            console.log(Object.keys(authorData))
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
            email: userName, password: password
        });
        if (!findAuthor)
            return res.status(404).send({
                status: false,
                msg: 'Email or Password is not valid',
            });
        let token = jwt.sign(
            {
                authorId: findAuthor._id.toString(),
            },
            'group-21'
        );
        res.setHeader('x-api-key', token);
        res.status(200).send({ status: true, token: token });
    } catch (err) {
        res.status(500).send({ Status: 'SERVER ERROR', Msg: err.message });
    }
};

module.exports.createAuthor = createAuthor;
module.exports.loginAuthor = loginAuthor;