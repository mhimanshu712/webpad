const express = require('express');
const app     = express();

app.set('view engine','ejs');

app.get('/',(req,res) => {
	res.render('home');
});

app.get('/camera',(req,res) => {
	res.render('camera');
});

app.listen(9999);