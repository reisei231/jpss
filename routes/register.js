var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var mongoClient = require("mongodb").MongoClient;
const key = 'jpss';
var url = "mongodb://admin:40olevuz@ds014578.mlab.com:14578/jpss";
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});
router.post('/', function(req, res,next) {
  hash = crypto.createHmac('sha256', key).update(req.body.password).digest('hex');
  
  mongoClient.connect(url, function(err, db) {
    var collection = db.collection("users");
    token = crypto.createHmac('sha256', req.body.email).update(hash).digest('hex');
    collection.findOne({email: req.body.email},
      function(err,doc) {
        if(err){
          console.log(err);
        }
        /*
        Если пользователя есть в базе данных - отправляем ему сообщение
        */
        if(doc){
          res.render('register', {msg: "Пользователь с таким email-ом уже существует"});
        }
        /*
        Если пользователя нет - сообщаем о успешной регистрации
        */
       else{
         collection.insertOne({email: req.body.email, password: hash, token: token}, function(err, result){
           if(err){
             console.log(err);
           }
           console.log(result.ops);
           res.redirect('../');// возвращаем пользователя на /index
         })
       }
      })
  });
})
module.exports = router;
