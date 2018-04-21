var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://admin:40olevuz@ds014578.mlab.com:14578/jpss";
/* GET users listing. */
router.get('/hiragana', function(req, res, next) {
    mongoClient.connect(url, function(err,db){
        var col = db.collection('assets');
        col.findOne({id: "hiragana"}, function(err,doc){
            res.send(doc.hiragana);
        })
    })
});

module.exports = router;
