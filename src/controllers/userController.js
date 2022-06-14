const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel.js");
const UserModel = require("../models/userModel.js");

const createUser = async function (req, res) {
  let userData = req.body
  let savedData = await UserModel.create(userData)
  res.send({ msg: savedData })
}

const userLogin = async function (req, res) {
  userName = req.body.emailId
  userPassword = req.body.password
  let userDetails = await UserModel.findOne({ emaliId: userName, password: userPassword })
  if (!userDetails) {
    res.send({ status: false, MSg: "userName or password is invalid" })
  }
  let token = jwt.sign(
    {
      userId: userDetails._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp,"
    }, "functionup-radon");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token })
};

const getUserDetails = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) {

    token = req.headers["x-auth-token"];
  }
  if (!token) {

    return res.send({ status: false, Msg: "Token must be present" })
  }
  // If a token is present then decode the token with verify function

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken) {
    return res.send({ status: false, Msg: "Token is Invalid" })
  }
  let userId = req.params.userId
  let userDetails = await UserModel.findById(userId)
  if (!userDetails) {
    return res.send({ status: false, Msg: "NO such user exists" })
  }
  res.send({ status: true, data: userDetails })


};


const updateUser = async function (req, res) {
  let userId = req.params.userId
  let user = await UserModel.findById(userId)
  if (!user) {
   return res.send({ Msg: "No such user exists" })
  }
  let userData = req.body
  let updateUser = await UserModel.findOneAndUpdate({ _id: userId }, userData, {new: true})
  res.send({ status: updateUser, data: updateUser })
};


const deleteUser = async function (req, res) {
  let userId = req.params.userId
  let user = await UserModel.findById(userId)
  if (!user) {
   return res.send({ Msg: "No such user exists" })
  }
  let userData = req.body
  let deleteUser = await UserModel.findOneAndUpdate({ _id: userId }, userData, {new: true})
  res.send({ status: deleteUser, data: deleteUser })
};

module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.getUserDetails = getUserDetails
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser










//You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
