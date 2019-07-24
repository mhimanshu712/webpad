const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalSrtrat = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
var User =require('./models/user');


mongoose.connect('mongodb+srv://nodejs:power@cluster0-f8gsu.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex: true
}).then(()=>{
    console.log('connected to db');
});
app.use(bodyParser.urlencoded({extended:true}));

app.use(require('express-session')({
    secret: "Darkpunk is the coolest",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine","ejs");

passport.use(new LocalSrtrat(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/',function(req,res){
    res.redirect('/login');
});

app.get('/secret',isloggedIn,function(req,res){
    res.render("secret");
});

function isloggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

app.get('/register',function(req,res){
    res.render('register');
});

app.post('/register',function(req,res){
    var username = req.body.username;
    var userpassword = req.body.userpassword;

    User.register(new User({username:username}),userpassword,function(err,user){
        if(!err){
            passport.authenticate('local')(req,res,function(){
                res.redirect('/secret');
            });
        }
    });
});

app.get('/login',function(req,res){
    res.render('login');
});

app.post('/login',passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect: "/login"
}),function(req,res){
});

app.get('/logout',function(req,res){
    req.logOut();
    res.redirect('/');
});

app.listen(8080);