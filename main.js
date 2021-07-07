const imdb = require('imdb-api')
var http = require('http')
var url = require('url')
var fs = require('fs');
const axios = require('axios').default;

var form = fs.readFileSync('./site.html');

http.createServer(function (req, res) {
    res.write(form);
    res.end();
}).listen(8080)


getValue('inception')
// document.getElementById('mDetails').innerHTML = 'ayo';

function getValue(name) {
    // imdb.get({name: name}, {apiKey: '95b1aff'}).then(console.log).catch(console.log);
    axios.get("https://www.omdbapi.com/?apikey=95b1aff&t=" + name).then(function (response) {
        // handle success
        console.log(response.data['Title']);
      });
}