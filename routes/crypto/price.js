var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../../config');
var app = express();
var Cryptowatch = require('cryptowatch');
var cw = new Cryptowatch();

router.get('/', function(req, res, next) {
    var currency = req.headers['currency'];
    cw.price(currency, 'usd', 'kraken').then(function(price){
        cw.summary(currency, 'usd', 'kraken').then(function(summary){
            res.json({
                price:price.price,
                change:summary.price.change.percentage
            });
        });
    });
});

module.exports = router;
