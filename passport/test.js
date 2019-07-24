const express = require('express'),
      app     = express();
      mongoose = require('mongoose');

      mongoose.connect('mongodb+srv://nodejs:power@cluster0-f8gsu.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useCreateIndex: true
    }).then(()=>{
        console.log('connected to db');
    });

app.get('/',function(req,res){
    
});
