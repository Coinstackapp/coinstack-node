var express = require('express');
var router = express.Router();
var config = require('../../config');
var app = express();
var KrakenClient = require('kraken-api');
var kraken = new KrakenClient(config.key, config.secret);

router.get('/', function(req, res, next) {
  	 kraken.api('Ticker', { pair : 'XXBTZUSD' }).then(function(result){
      res.send(result);
    });
});

module.exports = router;
