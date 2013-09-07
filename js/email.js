filepicker.setKey('AQ6kiiJGJS1iZl7OgXeAPz');

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
	var emailObject = ({
		to: document.getElementById('to').value,
		from: document.getElementById('from').value,
		subject: document.getElementById('subject').value,
		text: document.getElementById('body').value,
	});

	var sendgrid = require('sendgrid')('jaj2610', 'statefarm');
	sendgrid.send(emailObject, function(err, json) {
		if (!err) { return console.error(err); }
			console.log(err);
	});
}