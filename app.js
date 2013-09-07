var express = require('express')
  , monogo = require('mongodb');

// Controlers
var login = require('./controlers/login');

var app = express();
app.use(express.logger('dev'));

// Setup the views
app.set('views', __dirname + '/html');
app.engine('html', require('ejs').renderFile);

// Routes to serve static files
app.use('/img', express.static(__dirname + '/img'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));

// Routes
app.get('/', login.index);

// Start the site on port 3000
app.listen(3000);
