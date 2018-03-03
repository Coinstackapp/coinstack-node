var express = require('express');
var router = express.Router();
var News = require('../../shemas/news');
var moment = require('moment');

router.post('/', function(req, res, next) {

   var news = new News({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    featured: req.body.featured,
    date: moment().format('MMMM Do YYYY')
  });

  news.save(function(response,err) {
    res.send({success:true,Message:'Done!'});
  });
});

module.exports = router;
