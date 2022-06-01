const printDate = function(){
    const d = new Date()
    console.log(d.getDate())
}

const printMonth = function(){
    console.log("June")
}


const getBatchInfo = function(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
}
module.exports.getBatchInfo = getBatchInfo
module.exports.printDate = printDate
module.exports.printMonth = printMonth