const trim = function(){
    const a = ("   Rohit Patel    ")
    let result = a.trim()
    console.log(result)
}

const changeToLowerCase = function(){
    const a = ("Rohit Patel")
    let result = a.toLowerCase()
    console.log(result)
}


const changeToUpperCase = function(){
    const a = ("Rohit Patel")
    let result = a.toUpperCase()
    console.log(result)
}
module.exports.changeToUpperCase = changeToUpperCase
module.exports.changeToLowerCase = changeToLowerCase
module.exports.trim = trim