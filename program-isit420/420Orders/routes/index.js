var express = require('express');
var router = express.Router(); 
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
let ToDos = require('../model/Todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const dbURI =
  "mongodb+srv://angelref:angelref123456@clusterisit1-u7dpt.mongodb.net/ToDos?retryWrites=true&w=majority";
  

  const connectDB = async () => {
      const conn =  await mongoose.connect(dbURI, {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
          useCreateIndex: true
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  };
  connectDB();

/* GET home page. */
router.get('/', function(req, res) {
 console.log(req.body);
  res.sendFile('index.html');
  
});
router.post('/newOrder',async function(req, res){
      console.log('req.body.storenum is ', req.body.storeNumber);
    newObject = {
      storeNumber:  req.body.storeNumber,
      salesPersonID: req.body.salesPersonID,
      itemNumber: req.body.itemNumber,
      timePurch: Date(Date.now).toString(),
      pricePaid: req.body.pricePaid
   }
   console.log(newObject); 
 //  let makeMongo = JSON.stringify(newObject)
   const todo = await ToDos.create(newObject);
   res.status(201).json({success: true,
       data: newObject,
       msg: 'created new Todos'});
   //res.json(newObject);
})                             
router.get("/newOrder", (req, res) => {
    
//   console.log(req.body);
  ToDos.find({}, (err, AllToDos) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).json(AllToDos);
  });
   //res.json(newObject)
   //getTodo(req,res,next);
})

module.exports = router;
