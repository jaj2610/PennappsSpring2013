var db = require('mongojs').connect('clubhub', ['users']);

// Render basic login page
exports.index = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      res.end('Welcome, ' + req.session.username + '!');
   }
}
