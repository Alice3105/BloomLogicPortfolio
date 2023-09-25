/* 
File name: express.js
Student's name: Alice Huynh
Student ID: 301341638
Date: 2023-09-25*/

//Import dependencies to use
var express = require ('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    config = require('../config/env/development'),
    session = require('express-session');

module.exports = function(){
    //Create Express object
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        //Use morgan middleware (logger )
        //if the NODE_ENV variable is development
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production'){
        //Use compress middleware (provides response compression)
        //if the NODE_ENV variable is production
        app.use(compress());
    }

    //bodyParser module handles request data
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    //provides DELETE and PUT HTTP verbs legacy support
    app.use(methodOverride());

    //Configure express-session middleware to keep track of user's behavior
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    //Configure the view system
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    //Serve static file
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    //Routing
    app.use('/', require('../app/routes/index.server.routes'));
    //require('../app/routes/index.server.routes')(app);
    return app;
};