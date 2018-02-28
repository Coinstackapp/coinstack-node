var express = require('express');
var router = express.Router();
var User = require('../shemas/users');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.post('/', function(req, res, next) {
  User.findById(req.body.id, function(err, result) {
    res.json({
      data:result
    })
  })
});

module.exports = router;
