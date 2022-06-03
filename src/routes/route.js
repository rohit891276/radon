const express = require('express');
const externalModule = require('../logger/logger.js')
const dateModule = require('../util/helper.js')
const caseModule = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {


    externalModule.welcome()
    dateModule.printDate()
    dateModule.printMonth()
    dateModule.getBatchInfo()
    caseModule.trim()
    caseModule.changeToLowerCase()
    caseModule.changeToUpperCase()

    res.send('Welcome to my application. I am Rohit and a part of FunctionUp Radon cohort.')
});
module.exports = router;


// Question 1                                                   

router.get('/movies', function (req, res) {
    let movies = ["Rang de basant", "The shining", "Lord of the rings", "Batman begins"]
    console.log(movies)
    res.send(movies)
})


// Question 2

router.get('/movies/:index', function (req, res) {
    let movies = ["Rang de basant", "The shining", "Lord of the rings", "Batman begins"]
    console.log("Movie name is " + movies[req.params.index])
    res.send(movies[req.params.index])

})


// Question 3

router.get('/video/:index', function (req, res) {
    let video = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]

    if (req.params.index < video.length) {
        console.log("Movie name is " + video[req.params.index])
    } else {
        console.log("Please enter the valid index value " + (video[req.params.index] = " "))
    }

    res.send(video[req.params.index])

})


// Question 4

router.get('/films', function (req, res) {
    let arrayObj = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    console.log(arrayObj)
    res.send(arrayObj)

})


// Question 5

router.get('/films/:filmId', function (req, res) {
    let arrayObj = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rang de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    if (req.params.filmId <= arrayObj.length) {
        console.log("Movie name is " + arrayObj[req.params.filmId])

    } else {
        console.log("No movie exists with this id" + (arrayObj[req.params.filmId] = " "))
    }
    res.send(arrayObj[req.params.filmId])

})


//PRITISH SIR ASSIGNMENT:


//  Question 1


router.get('/sol1', function (req, res) {
    let a = [1, 2, 3, 5, 6, 7], count = a[a.length - 1];
    let missing = [];
    for (let i = 1; i <= count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ", missing.toString());
    res.send('Missing No. Finded')
});


//Question 2


router.get('/sol2', function (req, res) {
    let a = [33, 34, 35, 37, 38], count = a[a.length - 1];
    let missing = [];
    for (let i = 33; i <= count; i++) {
        if (a.indexOf(i) == -1) {
            missing.push(i);;
        }
    }
    console.log("The Missing Number is: ", missing.toString());
    res.send('Missing No. Finded')
});



// adding this comment for no reason