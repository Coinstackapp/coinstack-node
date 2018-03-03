var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var User = require('../../shemas/users');

router.post('/', function(req, res, next) {

   // create a sample user
   var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    token:"null",
    type:"email",
    admin:false
  });

  // save the sample user
  user.save(function(response,err) {
    if (err) throw err;
    res.send({success:true})
  });
});

module.exports = router;
