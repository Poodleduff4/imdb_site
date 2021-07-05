var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var imageUpload = fs.readFileSync('./fileupload.html');


http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/Luke/Documents/site_uploads/' + files.filetoupload.name;
      if (files) {
          
      }
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write(imageUpload);
        console.log("new file uploaded");
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);