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

/* router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
}); */


// adding this comment for no reason