var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mojang', function(req, res, next) {
  res.render('mojang');
});

module.exports = router;
