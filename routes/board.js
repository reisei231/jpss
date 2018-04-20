var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://admin:40olevuz@ds014578.mlab.com:14578/jpss";
/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoClient.connect(url, function(err, db){
        var users = db.collection('users');
        var id = req.cookies.userid;
        users.findOne({token: id}, function(err, doc){
            console.log(doc);
            if(doc){
                res.render('board', {name: doc.name, 
                                     email: doc.email})
            }
            else{
                res.redirect('/');
            }
            if(err){
                console.log(err);
            }
        })
    })
});

module.exports = router;
