var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var authorised = false;
  if(req.cookies.userid){
    console.log("Куки видны");
    authorised = true;
  }
  res.render('index',{authorised : authorised});
});

module.exports = router;
