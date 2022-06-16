const jwt = require("jsonwebtoken")
const UserModel = require("../models/userModel.js");

let authenticate = async function (req, res, next) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) {
    token = req.headers["x-auth-token"];
  }
  if (!token) {
    return res.status(400).send({ status: false, Msg: "Token must be present" })
  }
 
  // If a token is present then decode the token with verify function
  let userId = req.params.userId
  let user = await UserModel.findById(userId)
  if (!user) {
    return res.status(400).send({ Msg: "No such user exists" })
  }

  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken) {
    return res.status(400).send({ status: false, Msg: "Token is Invalid" })
  }

  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId
  if (userToBeModified != userLoggedIn) 
  return res.status(400).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
  next()

  }catch(err){
    res.status(500).send({Msg: "Error", error: err.message})
  }


}

module.exports.authenticate = authenticate