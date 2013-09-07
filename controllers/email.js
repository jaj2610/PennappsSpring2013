// Display a send email form
exports.sendForm = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');
   } else {
      res.render('email.html');
   }
}
