var express = require('express');
var path = require('path');
var app = express();

app.set('view engine','pug');
app.set('views',path.join(__dirname + '/views'));
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/cv',function(req,res){
    res.render('cv',{
        menuopt:"cv"
    });
})
app.get('/photos',function(req,res){
    res.render('photos',{
        menuopt:"photos"
    });
})
app.get('/photos1',function(req,res){
    res.render('photos1',{
        menuopt:"photos"
    });
})

app.get('/erga',function(req,res){
    res.render('erga',{
        menuopt:"erga"
    });
})
app.get('/erga1',function(req,res){
    res.render('erga1',{
        menuopt:"erga"
    });
})
app.get('/links',function(req,res){
    res.render('links',{
        menuopt:"links"
    });
})
app.get('/admin',function(req,res){
    res.render('admin',{
        menuopt:"admin"
    });
})

app.listen(8081, function () {
    console.log('Simple Web Application running on port 8081!');
});