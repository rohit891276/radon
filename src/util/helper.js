const printDate = function(){
    const d = new Date()
    console.log(d.getDate())
}

const printMonth = function(){
    const d = new Date()
    let currentMonth = d.getMonth() + 1
    console.log(currentMonth)
}


const getBatchInfo = function(){
    console.log("Roadon, W3D1, the topic for today is Nodejs module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
