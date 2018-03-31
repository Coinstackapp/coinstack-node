var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../../../shemas/users');

router.post('/', function(req, res, next) {

   // create a sample user
   var user = new User({
    name: req.body.name,
    email: req.body.email,
    token:"null",
    type:"user",
    facebookId:req.body.fbId
  });

  // save the sample user
  user.save(function(err,response) {
    if(!err){
      res.send({
        success:true,
        user:response
      })
    }else{
      res.send({success:false,error:err});
    }
  });
});

module.exports = router;
