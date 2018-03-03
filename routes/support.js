var express = require('express');
var router = express.Router();
var Support = require('../shemas/support');

router.post('/', function(req, res, next) {

   var support = new Support({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });

  support.save(function(response,err) {
    res.send({success:true,Message:'Support message sent'});
  });
});

router.get('/', function(req, res, next) {
  Support.find({}, function(err, data) {
    res.json(data);
  });
});

module.exports = router;
