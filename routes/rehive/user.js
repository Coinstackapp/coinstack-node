var express = require('express');
var router = express.Router();
var User = require('../../shemas/users');
var Rehive = require('rehive');
var rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});

router.post('/', function(req, res, next) {
    rehive.admin.transactions.createCredit(
        {
           user: "n2oulahh@gmail.com",
           amount: 500,
           currency: "EUR",
           status: "complete"
        }).then(function (data) {
           res.send(data);
        });
});

module.exports = router;
