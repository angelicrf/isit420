var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.body);
  res.render('index.html', {req: req.body});
});
router.post('/newOrder', function(req, res){
  console.log(req.body);
})
router.get("/newOrder", async (req, res) => {
 //console.log(JSON.stringify(req.body));
   
 let myData = await fetch('http://localhost:3000/newOrder');
 res.json(myData);
  
})

module.exports = router;
