var dataDir = '/opt/freeboard/';
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/api/:id', function (req, res) {
    res.sendFile(dataDir + req.params.id + ".json");
});

app.post('/api/:id', function (req, res) {
    fs.writeFile(dataDir + req.params.id + ".json", JSON.stringify(req.body, null, 4));
    res.send('ok')
});

app.get('/:name', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.use(express.static(__dirname));
app.listen(process.env.PORT || 80);