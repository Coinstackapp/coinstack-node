var express = require('express');
var router = express.Router();
var config = require('../../config');
var stripe = require("stripe")(config.stripe);
var Rehive = require('rehive');
var rehive = new Rehive({apiVersion: 3, apiToken: '9706a798613cc8888800eebf0f6c3478a56fbaa63fe2f8103768fdd63b36ab59'});

router.post('/', function(req, res, next) {
    var amount = req.body.amount * 100 + 50;

    stripe.charges.create({
       customer: req.body.customerId,
       currency: 'eur',
       amount: amount
   },
   function(err, charge) {
    if(err){
        res.send({success:false,error:err,from:'stripe'});
    }else{
        rehive.admin.transactions.createCredit(
            {
               user: req.body.email,
               amount: req.body.amount * 100,
               currency: "EUR",
               status: "complete"   
            }).then(function (data) {
               res.send({success:true,data:data});
            }).catch(function(err){
                res.send({success:false,error:err,from:'rehive'});
            });
    }
   });
});

module.exports = router;
