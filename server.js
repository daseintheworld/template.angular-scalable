const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/to-be-project-name'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/to-be-project-name/index.html'));
});
app.listen(4300);