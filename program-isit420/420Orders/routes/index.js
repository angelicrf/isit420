var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});
router.get('/newOrder', function(req, res){
  res.send('Here is the first submit');
})

module.exports = router;
