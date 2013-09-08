var db = require('mongojs').connect('clubhub', ['users', 'donations', 'sponsors', 'events', 'clubs']);

// Render basic login page
exports.index = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.sponsors.find().toArray(function(errs, sponsors) {
         db.events.find().toArray(function(erre, events) {
            db.donations.find().toArray(function(errd, donations) {
               res.render('index.html', { 'sponsors'  : sponsors,
                                          'events'    : events,
                                          'donations' : donations
               });
            });
         });
      });
   }
}

exports.addDonationGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      // These are only nested so that the asychrnous calls complete correctly
      db.sponsors.find().toArray(function(errs, sponsors) {
         db.events.find().toArray(function(erre, events) {
            res.render('adddonation.html', { 'sponsors' : sponsors, 'events' : events });
         });
      });
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

      res.redirect('/dashboard');
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

      res.redirect('/dashboard');
   }
}

exports.addSponsorGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var sponsors;
      db.sponsors.find().toArray(function(err, array) { sponsors = array; } );

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

      res.redirect('/dashboard');
   }
}
