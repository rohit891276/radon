const jwt = require("jsonwebtoken")

let authenticate = async function (req, res, next) {
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
  let checkToken = decodedToken.userId
  let pathToken = req.params.userId
  if(checkToken != pathToken){
    res.send({Msg: "user not authorised"})
  }
  next()
  
}

module.exports.authenticate = authenticate