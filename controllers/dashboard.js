var db = require('mongojs').connect('clubhub', ['users', 'donations', 'sponsors', 'events']);

// Render basic login page
exports.index = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      res.end('Welcome, ' + req.session.username + '!');
   }
}

exports.addDonationGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var sponsors = db.sponsors.find().toArray();
      var events = db.events.find().toArray();

      res.render('adddonation.html', { 'sponsors' : sponsors, 'events' : events });
   }
}

exports.addDonationPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var sponsor_id = req.body.company;
      var event_id = req.body.event;

      db.donations.save({ 'amount'     : req.body.amount,
                          'sponsor_id' : sponsor_id,
                          'event_id'   : event_id
      });
   }
}

exports.addEventGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      res.render('addevent.html');
   }
}

exports.addEventPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.events.save({ 'name'   : req.body.name,
                       'date'   : req.body.date,
                       'budget' : req.body.budget
      });
   }
}

exports.addSponsorGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var sponsors = db.sponsors.find().toArray();

      res.render('addsponsor.html', { 'sponsors' : sponsors });
   }
}

exports.addSponsorPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.sponsors.save({
         'name'    : req.body.company,
         'contact' : req.body.contact,
         'email'   : req.body.email,
         'phone'   : req.body.phone,
         'club_id' : req.body.club
      });
   }
}
