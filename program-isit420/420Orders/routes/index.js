var express = require('express');
var router = express.Router(); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/* GET home page. */
router.get('/', function(req, res) {
 console.log(req.body);
  res.sendFile('index.html');
});
router.post('/newOrder', function(req, res){
   newObject = {
      storeNumber:  req.body.storeNumber,
      salesPersonID: req.body.salesPersonID,
      itemNumber: req.body.itemNumber,
      timePurch: Date(Date.now).toString(),
      pricePaid: req.body.pricePaid
   }
   console.log(newObject);
   res.json(newObject);
})                             
router.get("/newOrder", (req, res) => {

//   console.log(req.body);
   res.json(newObject)
})

module.exports = router;
