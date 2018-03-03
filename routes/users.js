var express = require('express');
var router = express.Router();
var User = require('../shemas/users');
var jwt = require('jsonwebtoken');
var config = require('../config');

router.get('/', function(req, res, next) {
  User.find({}, function(err, data) {
    res.json(data);
  });
});

module.exports = router;
