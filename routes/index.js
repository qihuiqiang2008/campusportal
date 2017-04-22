var express = require('express');
var router = express.Router();
var config=require("../config")
var staticSell=0;
/* GET home page. */
router.get('/portal', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

