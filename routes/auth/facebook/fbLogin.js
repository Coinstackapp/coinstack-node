var express = require('express');
var router = express.Router();
var User = require('../../../shemas/users');
var jwt = require('jsonwebtoken');
var config = require('../../../config');

router.post('/', function(req, res, next) {
  //Find The User
  User.findOne({email: req.body.email}).then(function(user,err){
    if (err) throw err;
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
        if(user.facebookId){
            var payload = { id: user._id };
        var token = jwt.sign(payload,config.secret);

        User.findById(user._id, function(err, result) {
            if (err) throw err;
            user.token = token;
            user.save(function(err) {
                if (err) throw err;
                res.send({success:true,id:user._id,token:token});
              });
          });
        }else{
            res.send('No Facebook ID')
        }
        
    }
});
});


module.exports = router;
