// Dependencies
const bodyParser = require('body-parser');

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};

// Add a GET route that returns the projectData object in your server code 
app.get('/post', getData);

function getData(request,response){
    response.send(JSON.stringify(projectData))
}

// Then, add a POST route that adds incoming data to projectData.
app.post('/addInput', addData);

function addData(request, response) {
    projectData.temperature = request.body.temperature;
    projectData.date = request.body.date;
    projectData.userResponse = request.body.user_response;
    body.send(projectData)
  }