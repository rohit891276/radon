const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const MemeController = require("../controllers/memeController")
const WeatherController = require("../controllers/weatherController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/getDistrictsById", CowinController.getDistrictsById)
router.get("/cowin/getWeatherDetails", WeatherController.getWeatherDetails)
router.get("/sortedLists", WeatherController.sortedLists)
router.get("/getmemes", MemeController.getMemes)
router.post("/createMemes", MemeController.createMemes)



module.exports = router;