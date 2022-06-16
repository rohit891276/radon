const express = require('express');
//bodyparseris used to parse incoming bodies
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
// only jason data will be parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  //it parses the complex data and also responsible for parsing urls

mongoose.connect("mongodb+srv://paradox766:paradox766@cluster0.cuttx.mongodb.net/Rohit_auth_3-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route)   // it is a middleware (it is a global middleware)

// listen method creates a listener on specified path/port
app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
