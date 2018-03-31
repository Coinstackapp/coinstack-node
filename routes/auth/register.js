var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../../shemas/users');
var stripe = require("stripe")(
  "sk_test_kqAV25JA3AxtfCXoqKUNOXv5"
);

router.post('/', function(req, res, next) {

   // create a sample user
   var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    token:"null",
    type:"user",
    facebookId:req.body.facebook,
    googleId: req.body.google
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
