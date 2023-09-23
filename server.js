//Specify the environment for the server
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Create new Express application object
var express = require('./config/express');
var app = express();

//Tell Express application to listen to the part 3000
app.listen(3000);
console.log('Server running at http://localhols:3000/');

//Return the application object to load and test the Express application
module.exports = app;