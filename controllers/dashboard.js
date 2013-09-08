var db = require('mongojs').connect('clubhub', ['users', 'donations', 'sponsors', 'events', 'clubs', 'members']);

// Render basic login page
exports.index = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.sponsors.find().toArray(function(errs, sponsors) {
         db.events.find().toArray(function(erre, events) {
            db.donations.find().toArray(function(errd, donations) {
               db.members.find().toArray(function(errm, members) {
                  res.render('index.html', { 'sponsors'  : sponsors,
                                             'events'    : events,
                                             'donations' : donations,
                                             'members'   : members
                  });
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

exports.deleteEvent = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else if (req.params.id == null) {
      res.redirect('/dashboard');

   } else {
      db.events.remove({ _id : new db.ObjectId(req.params.id) });
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

exports.deleteSponsor = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else if (req.params.id == null) {
      res.redirect('/dashboard');

   } else {
      db.sponsors.remove({ _id : new db.ObjectId(req.params.id) });
   }
}

exports.addClubGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      res.render('addclub.html');
   }
}

exports.addClubPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {

      db.club.save({ 'name' : req.body.clubName });

      res.redirect('/dashboard');
   }
}

exports.addMemberGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var members;
      db.members.find().toArray(function(err, array) { members = array; } );

      res.render('addmember.html', { 'members' : members });
   }
}

exports.addMemberPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.members.save({
         'name'    : req.body.memberName,
         'email'   : req.body.email,
         'phone'   : req.body.phone,
         'club_id' : req.body.club
      });

      res.redirect('/dashboard');
   }
}

exports.addOfficerGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      var officers;
      db.officers.find().toArray(function(err, array) { officers = array; } );

      res.render('addofficer.html', { 'officers' : officers });
   }
}

exports.addOfficerPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.officers.save({
         'name'    : req.body.officerName,
         'email'   : req.body.email,
         'phone'   : req.body.phone,
         'club_id' : req.body.club,
         'position' : req.body.position
      });

      res.redirect('/dashboard');
   }
}

exports.editEventGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else if (req.params.id == null) {
      res.redirect('/dashboard');

   } else {
      db.events.findOne({ _id : new db.ObjectId(req.params.id) }, function(err, event) {
         if (err) { console.log(err); }
         res.render('editevent.html', { 'event' : event });
      });
   }
}

exports.editEventPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.events.update({ _id : new db.ObjectId(req.body.id) },
                       { $set: { name   : req.body.name,
                                 date   : req.body.date,
                                 budget : req.body.budget
                               }
                        },
                        { multi : false }
      );

      res.redirect('/dashboard');
   }
}

exports.editSponsorGet = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else if (req.params.id == null) {
      res.redirect('/dashboard');

   } else {
      db.sponsors.findOne({ _id : new db.ObjectId(req.params.id) }, function(err, sponsor) {
         if (err) { console.log(err); }
         res.render('editsponsor.html', { 'sponsor' : sponsor });
      });
   }
}

exports.editSponsorPost = function(req, res) {
   if (req.session.username == null) {
      res.render('login.html');

   } else {
      db.sponsors.update({ _id : new db.ObjectId(req.body.id) },
                       { $set: { name    : req.body.company,
                                 contact : req.body.contact,
                                 email   : req.body.email,
                                 phone   : req.body.phone,
                                 club    : req.body.club
                               }
                        },
                        { multi : false }
      );

      res.redirect('/dashboard');
   }
}
