const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://harsh-developer:aA12345678@cluster0.lxbes.mongodb.net/Project-blogs?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("Hello Harsh, your MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);

app.all('/**', (req, res) => {
    res.status(404).send({ status: false, message: "Page Not Found!" })
})


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});