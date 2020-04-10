var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//app.use(multer());
                            
/* GET home page. */
router.get('/', function(req, res) {
//  console.log(JSON.stringify(req.body));
  res.sendFile('index.html');
});
router.post('/newOrder', function(req, res){
  console.log(req.body);
})
router.get("/newOrder", (req, res) => {
//let newOrderData = JSON.stringify(req.body.storeNumber);
const Student = req.body;
console.log(Student);
res.json();
})

module.exports = router;
