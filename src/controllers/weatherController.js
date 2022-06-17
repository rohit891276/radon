let axios = require('axios')

let getWeatherDetails = async function (req, res) {
    try {
        let q = req.query.q
        let appid = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`

        }

        let result = await axios(options);
        console.log(result.data.main.temp)
        let data = result.data
        res.status(200).send({ status: true, msg: data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: "SERVER ERROR", Error: err.message })
    }
}

const sortedLists = async function (req, res) {
    try {
        let cityDetails = [];
        let cityNames = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        for (let i = 0; i < cityNames.length; i++) {

            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cityNames[i]}&appid=${appid}`

            }

            let result = await axios(options);
            let data = result.data.main.temp
            let cityTemp = { "city": cityNames[i], "temp": data }
            cityDetails.push(cityTemp)
        }
        cityDetails.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, msg: cityDetails })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: "SERVER ERROR", Error: err.message })
    }
}

module.exports.getWeatherDetails = getWeatherDetails
module.exports.sortedLists = sortedLists