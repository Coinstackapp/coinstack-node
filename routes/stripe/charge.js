var express = require('express');
var router = express.Router();
var stripe = require("stripe")('sk_test_kqAV25JA3AxtfCXoqKUNOXv5');

router.post('/', function(req, res, next) {
    var amount = req.body.amount + '500';
    var stripeToken = req.body.stripeToken;

    stripe.charges.create({
       customer: req.customerId,
       currency: 'usd',
       amount: amount
   },
   function(err, charge) {
       if (err) {
           res.send(err)
       } else {
           res.send({success:true,amount:charge.amount});
       }
   });
});

module.exports = router;
