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

router.get('/', function(req, res) {
 //console.log(req.body);
  res.sendFile('index.html');
  
});
router.post('/newOrder', async function(req, res){
      
    let i;
    async function doSetTimeout(i) {
      return new Promise(resolve => {
        setInterval(resolve, i);
      })
    }
    for ( i of req.body){
        console.log('the data is: ', i);
        const todo = await ToDos.create(i);
        await doSetTimeout(1000);   
    }
    res.status(201).json({success: true,
        data: i,
        msg: 'created new Todos'}); 
    })    
 //  res.json(JSON.stringify(req.body));                             
router.get("/newOrder", (req, res) => {
    
 ToDos.find({}, (err, AllToDos) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    res.status(200).json(AllToDos);
  });   
   // res.json((req.body[0].newObject));
})

module.exports = router;
