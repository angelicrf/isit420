var express = require('express');
var router = express.Router();
//app.use(express.json());

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.html');
});
router.post('/newOrder', function(req, res){
  console.log(req.body);
})

module.exports = router;
