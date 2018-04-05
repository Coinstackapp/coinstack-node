const Rehive = require('rehive');
const rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});
var express = require('express');
var router = express.Router();
var User = require('../../shemas/users');

router.post('/', function(req, res, next) {
   rehive.admin.users.create({
    first_name: req.body.name,
    email:req.body.email,
}).then(function(user){
    res.send(user.identifier);
    User.findOne({email: req.body.email}).then(function(user,err){
        user.rehiveId = user.identifier;
        user.save(function(err) {
          if(err) throw err;
          });
       });
}, function(err) {
    res.json({
        success:false,
        error:err
    });
});
});

module.exports = router;
