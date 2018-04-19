var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../../shemas/users');
var Rehive = require('rehive');
var rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});

router.post('/', function(req, res, next) {
  rehive.admin.users.create({
    username: req.body.username,
    email:req.body.email,
  }).then(function(rehive){
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      token:"null",
      type:"users",
      stripeId:"null",
      defaultCard:"null",
      rehiveId:rehive.identifier
    });
    // save the sample user
  user.save(function(err,response) {
    if(err){
      res.send({
        success:false,
        error:err
      });
    }else{
      res.send({
        success:true,
        user:response
      });
    }
  });
}).catch(function(err){
  res.send({
    success:false,
    error:err,
    tag:'rehive'
  });
});
});

module.exports = router;
