const express = require('express');
const router = express.Router();

router.all('/',function(req,res){
	res.send("Welcome!");
});

module.exports = router;
