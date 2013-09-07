var db = require('mongojs').connect('clubhub', ['users']);
var CryptoJS = require('crypto-js');
var SHA3 = require('crypto-js/sha3');

// Render basic login page
exports.index = function(req, res) {
   res.render('login.html');
}

// Render a basic register page
exports.registration = function(req, res) {
   res.render('registration.html');
}

exports.register = function(req, res) {
   console.log('Checking for user with username ' + req.body.username);
   console.log(db.users.count({ 'username' : req.body.username }));

   db.users.find({ 'username' : req.body.username }).count(function(err, count) {
      if (count == undefined || count == 0) {
         // New user
         var username = req.body.username;
         var password = SHA3(req.body.password).toString(CryptoJS.enc.Hex);

         db.users.save({ 'username' : username, 'password' : password });
         console.log('New user created.');
         res.redirect('/');

      } else {
         console.log('Username taken');
         res.end('Sorry, that username is taken.');
      }
   });
}

exports.verify = function(req, res) {
   console.log('Trying to log in user ' + req.body.username);
   var username = req.body.username;
   var password = SHA3(req.body.password).toString(CryptoJS.enc.Hex);

   db.users.find({ 'username' : username, 'password' : password }).count(function(err, count) {
      if (count == 1) {
         console.log('Authentication successful.');
         res.redirect('/dashboard');
      } else {
         console.log('Authentication failed!');
         res.redirect('/');
      }
   });
}

