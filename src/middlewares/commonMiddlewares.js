const moment = require('moment')


const ctipData = async function(req, res,next){
    let timestamp = moment()
    console.log(timestamp.format(" YYYY-MM-DD HH-MM-SS")+" "+ req.ip+" "+ req.path)
    next()
}

module.exports.ctipData = ctipData