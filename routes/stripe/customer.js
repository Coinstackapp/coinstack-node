var express = require('express');
var router = express.Router();
var config = require('../../config');
var stripe = require("stripe")(config.stripe);
var User = require('../../shemas/users');

router.post('/', function(req, res, next) {
  stripe.tokens.create({
  card: {
    "number":req.body.number,
    "exp_month":req.body.month,
    "exp_year":req.body.year,
    "cvc":req.body.cvc
  }
}, function(err, token) {
  stripe.customers.create({
    email:req.body.email,
    description:req.body.name,
    source:token.id// obtained with Stripe.js
   }, function(err, customer) {
    res.json({
      customerID:customer.id,
      defaultCard:customer.default_source,
      cards:customer.sources.data,
    });
    User.findOne({email: req.body.email}).then(function(user,err){
    user.stripeId = customer.id;
    user.defaultCard = customer.default_source;
    user.save(function(err) {
      if(err) throw err;
      });
   });
});
});
});

module.exports = router;
