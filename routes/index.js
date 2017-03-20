var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('INDEX PAGE');
});

//allow access from other files
module.exports = router;
