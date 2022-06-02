const express = require('express');
const externalModule = require('../logger/logger.js')
const dateModule = require('../util/helper.js')
const caseModule = require('../validator/formatter.js')
const loChunk = require('lodash')
const router = express.Router();
const app = express.app()

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

router.get('/hello', function (req, res) {

            // Using the chunk function

    let allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(loChunk.chunk(allMonths, 3))

    res.send('My first assignment by using')


    // Using the tail function


    let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    let newArray = loChunk.tail(x)
    console.log(newArray)

    // Using the union function


    let array1 = [1]
    let array2 = [1, 2]
    let array3 = [1, 2, 3]
    let array4 = [1, 2, 3, 4]
    let array5 = [1, 2, 3, 4, 5]

    let comArray = loChunk.union(array1, array2, array3, array4, array5)
    console.log(comArray)


            // Using the fromPairs function


    let pairs = [ ["horror","The Shining"], ["drama","Titanic"], ["thriller","Shutter Island"], ["fantasy","Pans Labyrinth"]]
    let obj = loChunk.fromPairs(pairs)
    console.log(obj)

});


/* app.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum = sum + arr[i]
    let n = arr.length
    let missingNumber = getMissingNo(arr, n)
    console.log(missingNumber)

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
}); */



module.exports = router;


// adding this comment for no reason