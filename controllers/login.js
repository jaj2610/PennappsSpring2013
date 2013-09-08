var db = require('mongojs').connect('clubhub', ['users']);
var CryptoJS = require('crypto-js');
var SHA3 = require('crypto-js/sha3');

// Render basic login page
exports.index = function(req, res) {
   if (req.session.username == null) {
      res.render('/login.html');

   } else {
      res.redirect('/dashboard');
   }
}

// Render a basic register page
exports.registration = function(req, res) {
   res.render('/registration.html');
}

exports.register = function(req, res) {
   var username = req.body.username.toLowerCase();
   console.log('Checking for user with username ' + username);

   db.users.find({ 'username' : username }).count(function(err, count) {
      if (count == 0) {
         // New user
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

// Verify that the provided credentials are 	
exports.verify = function(req, res) {
   var username = req.body.username.toLowerCase();
   var password = SHA3(req.body.password).toString(CryptoJS.enc.Hex);
   console.log('Trying to log in user ' + username);

   db.users.find({ 'username' : username, 'password' : password }).count(function(err, count) {
      if (count == 1) {
         console.log('Authentication successful.');
         req.session.username = username;
         res.redirect('/dashboard');
      } else {
         console.log('Authentication failed!');
         req.session.username = null;
         res.redirect('/');
      }
   });
}

