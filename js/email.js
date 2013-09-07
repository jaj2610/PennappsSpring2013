filepicker.setKey('AQ6kiiJGJS1iZl7OgXeAPz');

var sendgrid = require('sendgrid')('jaj2610', 'statefarm');
var Email = sendgrid.Email;
var emailObject = new Email();

function addAttachment()
{
	filepicker.pick({
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER'],
  	},
  function(InkBlob){
    console.log(JSON.stringify(InkBlob));
  },
  function(FPError){
    console.log(FPError.toString());
  }
);

	emailObject.addFile({
		filename: InkBlob.filename,
		url: InkBlob.url
	});
}

function sendEmail()
{
	emailObject.to = document.getElementById('to').value;
	emailObject.from = document.getElementById('from').value;
	emailObject.subject = document.getElementById('subject').value;
	emailObject.text = document.getElementById('body').value;

	sendgrid.send(emailObject, function(err, json) {
		if (!err) { return console.error(err); }
			console.log(err);
	});
}