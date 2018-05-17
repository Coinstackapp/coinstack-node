var express = require('express');
var router = express.Router();
var config = require('../../config');
var app = express();
var KrakenClient = require('kraken-api');
var kraken = new KrakenClient(config.key, config.secret);

router.post('/', function(req, res, next) {
  kraken.api('AddOrder', { 'pair': 'XBTCZEUR', 'type': 'buy', 'ordertype': 'market', 'volume':'10.0', 'oflags': 'viqc'}, function(error,data) {
    if(error) {
      res.send({
        success:false,
        error:error
      });
    }
    else {
      res.send({
        success:true,
        data:data
      }); 
    }
  });
});

module.exports = router;
