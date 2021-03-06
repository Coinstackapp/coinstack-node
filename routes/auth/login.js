var express = require('express');
var router = express.Router();
var User = require('../../shemas/users');
var jwt = require('jsonwebtoken');
var config = require('../../config');

router.post('/', function(req, res, next) {
  //Find The User
  User.findOne({
   email: req.body.email
  }).then(function(user,err){
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      user.comparePassword(req.body.password, function(err, isMatch) {        
        if (err) throw err;
        if(isMatch == false){
          res.json({success:false,message:"Wrong Password"});
        }else{
          var payload = { id: user._id };
          var token = jwt.sign(payload,config.secret);

          User.findById(user._id, function(err, result) {
              if (err) throw err;
              user.token = token;
              user.save(function(err) {
                  if (err) throw err;
                  res.send({success:true,id:user._id,token:token,name:user.name,email:user.email,rehiveId:user.rehiveId});
                });
            });
    }
      });
    }

});
});



module.exports = router;
