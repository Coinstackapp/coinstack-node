var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require('../../config');
var app = express();
var axios =  require('axios');

router.get('/', function(req, res, next) {
    axios.get('https://api.cryptowat.ch/markets/kraken/btcusd/summary').then(function(response){
        res.send({
            price:response.data.result.price.last,
            change:response.data.result.price.change.percentage
        });
    });
});

module.exports = router;
