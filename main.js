const imdb = require('imdb-api')
var http = require('http')
var url = require('url')
var fs = require('fs');

var form = fs.readFileSync('./site.html');

http.createServer(function (req, res) {
    res.write(form);
    res.end();
}).listen(8080)




function getValue(name) {
    imdb.get({name: name}, {apiKey: '95b1aff'}).then(console.log).catch(console.log);
}