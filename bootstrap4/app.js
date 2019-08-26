const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
	res.render('test');
});

app.get('/flex',(req,res)=>{
	res.render('flex');
});

app.listen(9999);