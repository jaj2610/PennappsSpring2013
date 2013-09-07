var sendgrid = require('sendgrid')('jaj2610', 'statefarm');
var Email = sendgrid.Email;
var emailObject = new Email();

// Display a send email form
exports.sendForm = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');
   } else {
      res.render('email.html');
   }
}

// Sends an email message
exports.sendEmail = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');
   } else {
      emailObject.to = req.body.to;
      emailObject.from = req.body.from;
      emailObject.subject = req.body.subject;
      emailObject.text = req.body.body;

      if (req.body.url != null && req.body.url != '') {
         emailObject.addFile({
            filename: req.body.filename,
            url: req.body.url
         });
      }

      sendgrid.send(emailObject, function(err, json) {
         if (err) { console.log(err); }
      });

      res.render('email.html');
   }
}
