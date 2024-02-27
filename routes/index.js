var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var alldata = fs.readFileSync("data.json",'utf-8')
  let conert = JSON.parse(alldata)
  res.render('index', { title: 'nodefarm',data:conert });
});
router.get('/detail', function(req, res, next) {
  var alldata = fs.readFileSync("data.json",'utf-8')
  let conert = JSON.parse(alldata)
  let index = req.query.no
  // console.log(req.query.no);   
  
  res.render('detail', { title: 'detail', newindex : conert[index] });
});



module.exports = router;
