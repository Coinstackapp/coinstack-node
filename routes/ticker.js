var express = require('express');
var router = express.Router();
const key = 'I5t6lO6u3oiUAIjnDiicoyXiI3tSygaGNQg1lHjUaPrErkbOaAdrjD/m'; // API Key
const secret = 'gyvu7S22obBKbCfTkhzrCK30YLpuxeuGii5jPSExBFdyhBdFAR1zoa/EuyA4ysswXE+9UqWUG5Z5YnkE6Iy1DQ=='; // API Private Key
const KrakenClient = require('kraken-api');
const kraken = new KrakenClient(key, secret);

router.get('/', function(req, res, next) {
  kraken.api('Ticker', {"pair": 'XXBT'}, function(error, data) {
    (async () => {
       await kraken.api('Ticker', { pair : 'XXBTZUSD'}).then(function(response){
         res.send(response);
       })
})();
});
});

module.exports = router;
