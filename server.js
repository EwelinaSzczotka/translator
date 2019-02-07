var express = require('express');
var wiky = require('wiky.js');
var fs = require("fs");
const nodePandoc = require('node-pandoc');

var app = express();
app.listen(3000, function () {
  console.log('server running on port 3000');
})

//Pandoc config
src = 'test.wiki';
args = '-f mediawiki -t html -o ./translated.html';
callback = function (err, result) {
    if (err) {
      console.error('Error:',err);
    }
    console.log(result);
    return result;
};

app.get("/", (req, res) => {
    //Wiky.js:
    //var data = fs.readFileSync('test.txt');
    //var html = wiky.process(data.toString(),{});
    nodePandoc(src, args, callback);
    res.sendfile('translated.html');
});

app.get("/:id", (req,res) => {
    var src = req.params.id;
    nodePandoc(src, arg, callback);
    res.sendfile('translated.html');
});

