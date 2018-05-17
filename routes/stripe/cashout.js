var express = require('express');
var router = express.Router();
var config = require('../../config');
var stripe = require("stripe")(config.stripe);
var Rehive = require('rehive');
var rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});

router.post('/', function(req, res, next) {
    var refund = stripe.refunds.create({
        charge: 'ch_PuwSUN3J1s9u2b29jsom',
        amount: 1000,
    });
});

module.exports = router;
