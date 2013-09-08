var express = require('express')
  , monogo = require('mongodb');

// Controllers
var login = require('./controllers/login')
  , logout = require('./controllers/logout')
  , dashboard = require('./controllers/dashboard')
  , email = require('./controllers/email');

var app = express();
app.use(express.bodyParser());
app.use(express.cookieParser('pEnNaPpSF13L!'));
app.use(express.session({secret: 'pEnNaPpSF13L!'}));
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
app.get('/registration.html', login.registration);
app.post('/login', login.verify);
app.post('/register', login.register);

app.get('/logout', logout.index);

app.get('/dashboard', dashboard.index);

app.get('/dashboard/addDonation', dashboard.addDonationGet);
app.post('/dashboard/addDonation', dashboard.addDonationPost);
app.get('/dashboard/addEvent', dashboard.addEventGet);
app.post('/dashboard/addEvent', dashboard.addEventPost);
app.get('/dashboard/addSponsor', dashboard.addSponsorGet);
app.post('/dashboard/addSponsor', dashboard.addSponsorPost);
app.get('/dashboard/addClub', dashboard.addClubGet);
app.post('/dashboard/addClub', dashboard.addClubPost);
app.get('/dashboard/addMember', dashboard.addMemberGet);
app.post('/dashboard/addMember', dashboard.addMemberPost);
app.get('/dashboard/addOfficer', dashboard.addOfficerGet);
app.post('/dashboard/addOfficer', dashboard.addOfficerPost);

app.get('/dashboard/editDonation', dashboard.editDonationGet);
app.post('/dashboard/editDonation', dashboard.editDonationPost);
app.get('/dashboard/editEvent', dashboard.editEventGet);
app.post('/dashboard/editEvent', dashboard.editEventPost);
app.get('/dashboard/editMember', dashboard.editMemberGet);
app.post('/dashboard/editMember', dashboard.editMemberPost);
app.get('/dashboard/editOfficer', dashboard.editOfficerGet);
app.post('/dashboard/editOfficer', dashboard.editOfficerPost);
app.get('/dashboard/editSponsor', dashboard.editSponsorGet);
app.post('/dashboard/editSponsor', dashboard.editSponsorPost);
app.get('/dashboard/editClub', dashboard.editClubGet);
app.post('/dashboard/editClub', dashboard.editClubPost);

app.get('/email.html', email.sendForm);
app.post('/sendEmail', email.sendEmail);


// Start the site on port 3000
app.listen(3000);
