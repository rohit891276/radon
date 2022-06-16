const jwt = require("jsonwebtoken");
//const userModel = require("../models/userModel.js");
const UserModel = require("../models/userModel.js");

const createUser = async function (req, res) {
  try {
    let userData = req.body
    if (Object.keys(userData).length != 0) {
      let savedData = await UserModel.create(userData)
      return res.status(201).send({ msg: savedData })
    } else {
     return res.status(400).send({ Msg: "BAD REQUEST" })
    }
  }
  catch (err) {
    console.log(err)
   return res.status(500).send({ msg: "Error", error: err.message})
  }
}

const userLogin = async function (req, res) {
  try{
  userName = req.body.emailId
  userPassword = req.body.password
  let userDetails = await UserModel.findOne({ emaliId: userName, password: userPassword })
  if (!userDetails) {
    res.status(400).send({ status: false, Msg: "UserName or Password is invalid" })
  }
  let token = jwt.sign(
    {
      userId: userDetails._id.toString(),
      batch: "Radon",
      organisation: "FunctionUp,"
    }, "functionup-radon");
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, token: token })
  }
  catch(err){
    res.status(500).send({Msg: "SERVER ERROR", error: err.message})
  }
};

const getUserDetails = async function (req, res) {
  try{
  let userId = req.params.userId
  let userDetails = await UserModel.findById(userId)
  if (!userDetails) {
    return res.status(400).send({ status: false, Msg: "No such user exists" })
  }
  res.status(200).send({ status: true, data: userDetails })
}
catch(err){
  console.log(err)
  res.status(500).send({Msg: "SERVER ERROR", Error: err.message})
}

};


const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId
  let userData = req.body
  let updateUser = await UserModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
  res.status(200).send({ status: true, data: updateUser })
  }catch(err){
    console.log(err)
    res.status(500).send({Msg: "SERVER ERROR", Error: err.message})
  }
};


const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId
  let userData = req.body
  let deleteUser = await UserModel.findOneAndUpdate({ _id: userId }, userData, { new: true })
  res.status(200).send({ status: true, data: deleteUser })
  }catch(err){
    console.log(err)
    res.status(500).send({Msg: "SERVER ERROR", Error: err.message})
  }
};


const postMessage = async function (req, res) {
  try{
  let message = req.body.message
  let user = await UserModel.findById(req.params.userId)
  let updatedPosts = user.posts
  updatedPosts.push(message)
  let updatedUser = await UserModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  return res.status(200).send({ status: true, data: updatedUser })
  }catch(err){
    console.log(err)
    res.status(500).send({Msg: "SERVER ERROR", Error: err.message})
  }
}

module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.getUserDetails = getUserDetails
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage