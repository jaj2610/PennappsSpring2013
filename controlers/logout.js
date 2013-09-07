// Clear the session and redirect to the login page
exports.index = function(req, res) {
   req.session.username = null;
   res.render('login.html');
}
