var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Cookies: ", req.cookies);
  res.send('LOGIN PAGE');

});

module.exports = router;
