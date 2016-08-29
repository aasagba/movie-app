// modules
var express = require('express');
var request = require('request');
var sass = require('node-sass');

var app = express();

sass.render({
    file: main.scss,
    [, options..]
}, function(err, result) { /*...*/ });
// OR
var result = sass.renderSync({
    data: scss_content
        [, options..]
});

// set the static files location
app.use(express.static(__dirname + "/public"));

app.get('/movie/:movie', function (req, res) {
    console.log("I received a get request");

    var movie = req.params.movie;
    var url = 'http://www.omdbapi.com/?s=' + movie;
    var datas = [];

    request({url: url, json: true}, function (error, response, body) {
        if (error) {
            console.log("Couldn’t get response because of error: " + error);
            return;
        }

        datas = body.Search;
        console.log(JSON.stringify(datas));

        res.json(datas);
    });

});

app.listen(process.env.PORT || 8082);
console.log('Movie App on port 8082');