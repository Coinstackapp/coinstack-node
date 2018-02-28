var express = require('express');
var router = express.Router();
var KrakenClient = require('kraken-node-api');
var key = '...'; // API Key 
var secret = '...'; // API Private Key 
var kraken = new KrakenClient(key, secret);

router.get('/', function(req, res, next) {
  console.log(kraken.api('Ticker', { pair : 'XXBTZUSD' }));
});

module.exports = router;
