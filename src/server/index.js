const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
var bodyParser = require('body-parser')



const mockAPIResponse = require('./mockAPI.js')
var aylien = require("aylien_textapi");

const app = express()

//Use body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //We tell how we want our data to be handled.

// Cors for cross origin allowance //Let browser and server talk to each other.
const cors = require('cors')

app.use(express.static('dist'))
app.use(cors());


console.log(__dirname)

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

//listen to the env port - for heroku deployment
app.listen(process.env.PORT,listening);

if (process.env.PORT == undefined) {
    console.log("Port number undefined, running on 8081")
    app.listen(8081, function () {
        console.log('Example app listening on port 8081!')
    })
}
function listening(){
    console.log("Server running on ",process.env.PORT);
}


app.post('/analyze', function (req, res) {
    console.log("Got the post request")
    console.log(req.body.text)

    textapi.sentiment({
        'text': req.body.text
      }, function(error, response) {
        res.send(response);
        if (error === null) {
            console.log("api response",response);
        }
      });
})

function getSentiment(text) {
    textapi.sentiment({
        'text': text
      }, function(error, response) {
        if (error === null) {
            console.log("api response",response);
            data = response;
        }
      });
    return data;
}