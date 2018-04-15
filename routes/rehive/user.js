var express = require('express');
var router = express.Router();
var User = require('../../shemas/users');

router.post('/', function(req, res, next) {
   rehive.admin.users.create({
    username: req.body.username,
    email:req.body.email,
}).then(function(user){
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
