const express = require('express');
const app     = express();

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',function(req,res){
    res.render('home');
});

app.get('/show',function(req,res){
    res.render('show');
});

app.listen(8080);