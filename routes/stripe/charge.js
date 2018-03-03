var express = require('express');
var router = express.Router();
var stripe = require("stripe")('sk_test_KnpF0iI4ZE7OBDt4xtLW22Oe');

router.post('/', function(req, res, next) {
    let amount = 500;

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    }))
  .then(charge => res.send(charge))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});

module.exports = router;
