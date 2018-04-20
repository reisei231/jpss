var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://admin:40olevuz@ds014578.mlab.com:14578/jpss";
const key = "jpss";
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Cookies: ", req.cookies);
  res.render('login');

});
router.post('/', function(req, res, next) {
  hash = crypto.createHmac('sha256', key).update(req.body.password).digest('hex');
  
  mongoClient.connect(url, function(err, db) {
    var collection = db.collection("users");
    collection.findOne({email: req.body.email, password: hash}, function(err, doc){
      if(doc){
        console.log(doc._id);
        res.cookie('userid', doc._id.toString());
        res.redirect('../');
      }
      else {
        res.render('login', {msg: "неправильный логин или пароль"});
      }
    })
  });
  
});

module.exports = router;
