var express = require('express');
var router = express.Router();
var News = require('../../shemas/news');
var jwt = require('jsonwebtoken');
var config = require('../../config');
var app = express();

router.get('/', function(req, res, next) {
    var token = req.headers['x-access-token'];

    if (token) {

        jwt.verify(token, config.secret, function(err, decoded) {      
          if (err) {
            return res.json({ success: false, message: 'Failed to authenticate token.', error:err});    
          } else {
            req.decoded = decoded;    
            next();
            
           News.find({}, function(err, data) {
            res.json(data);
          });

          }
        });
    
      } else {
    
        // if there is no token
        // return an error
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    
      } 
});

module.exports = router;
