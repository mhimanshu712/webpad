//fileSize is in bytes
const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

app.set('view engine','ejs');
app.use(express.static('public'));

const storageconf = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req,file,next){
        next(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storageconf,
    limits: {fileSize: 1000000},
    fileFilter: function(req,file,next){
        checkFileType(file,next);
    }
}).single('myfile');

function checkFileType(file,next){
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    //check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return next(null,true);
    }else{
        next('Error: Images only');
    }
}

app.get('/',(req,res) => {
    res.render('home');
});

app.post('/uploads',(req,res) =>{
    upload(req,res,(err)=> {
        if(!err){
            if (req.file==undefined){
                console.log('Fuck empty file');
                res.render('home',{message:'Fuck! Select a file bouy!'});
            }else{
                console.log('uploaded');
                res.render('home',{message:'Yay! Uploaded',filename:'/uploads/'+req.file.filename});
                console.log(req.file);
            }
        }else{
                console.log('not uploaded');
                console.log(err);
                res.render('home',{message:err})
        }
    })
});

app.listen(8080);