filepicker.setKey('AQ6kiiJGJS1iZl7OgXeAPz');

function addAttachment() {
   filepicker.pick({
      mimetypes: ['image/*', 'text/plain'],
      container: 'window',
      services:['COMPUTER', 'DROPBOX', 'SKYDRIVE', 'GOOGLE_DRIVE', 'GITHUB', 'EVERNOTE', 'FACEBOOK', 'GMAIL', 'WEBCAM'],
   },
   function(InkBlob) {
      console.log(JSON.stringify(InkBlob));
      document.getElementById('url').value = InkBlob.url;
      document.getElementById('filename').value = InkBlob.filename;
   },
   function(FPError) {
      console.log(FPError.toString());
   });
}
