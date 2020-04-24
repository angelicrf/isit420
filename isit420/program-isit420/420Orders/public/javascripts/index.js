let newObject;
let newDataObject;
let newArray = [];
let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let holdNums = 0;
let disp;

const mainData = () => {
    document.addEventListener("DOMContentLoaded", function(event){

        document.getElementById('button1').addEventListener("click", function(){
                  while(holdNums < 450){                
                      getData();
                      newArray.push({newObject});
                      holdNums++;
                  }
                  document.getElementById('show')
                  .appendChild(document.createTextNode( 'Data processed, please push \'Post Mongodb\' botton' ));
        })
    }) 
    document.getElementById('button2').addEventListener("click", function(){
            uploadData();
            document.getElementById('display')
            .appendChild(document.createTextNode( 'Data sent to MongoDb, check out collection' ));
    
    })
    document.getElementById('button3').addEventListener("click", function(){
            generateMongo();
            document.getElementById('showMongo')
            .appendChild(document.createTextNode( 'client got back data: http://localhost:3000/newOrder' ));
})
   
}                        
const uploadData = () => {
    
    $.ajax({
       url: '/newOrder',
       method: 'POST',
       contentType: 'application/json',
       data:  JSON.stringify(newArray),
       success: console.log(JSON.stringify(newArray))                       
   })              
   $.ajax({
       url: '/newOrder',
       method: 'GET',
       contentType: 'application/json',
       data: JSON.stringify(newArray),
       success: alert("get data: " + JSON.stringify(newArray))
   })

}                       
const getData = () => {
    let infos = {
        storeNumber:  [98053 , 98007, 98077, 98055, 98011, 98046],
        salesPersonID: [1,2,3,4,5,6,7,8,9,10,
                        11,12,13,14,15,16,17,
                        18,19,20,21,22,23,24],
        itemNumber: [123456, 123654, 321456, 321654, 654123,
                     654321, 543216, 354126, 621453, 623451],
        timePurch: Date(Date.now()),
        pricePaid: [5,6,7,8,9,10,11,12,13,14,15]
     
    }
    let myRand_2;
    let myRand = infos.storeNumber[Math.floor(Math.random() * infos.storeNumber.length)];

    if(myRand === 98053){
        myRand_2 = getRand(1,4);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
          }             
    }
    if(myRand === 98007){
        myRand_2 = getRand(5,8);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
          }
    }
    if(myRand === 98077){
        myRand_2 = getRand(9,12);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
          } 
    }        
    if(myRand === 98055){
        myRand_2 = getRand(13,16);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
          } 
    }
    if(myRand === 98011){
        myRand_2 = getRand(17,20);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
            }                    
    }    
    if(myRand === 98046){
        myRand_2 = getRand(21,24);
        if(infos.storeNumber.indexOf(myRand_2) !== -1) {
            console.log('match');
            infos.salesPersonID = myRand_2;
            } 
        }
    
    let myRand_3 = infos.itemNumber[Math.floor(Math.random() * infos.itemNumber.length)];
    let myRand_4 = infos.pricePaid[Math.floor(Math.random() * infos.pricePaid.length)];
    
    newObject = {
           storeNumber:  [myRand],
           salesPersonID: [myRand_2],
           itemNumber: [myRand_3],
           timePurch: [Date(Date.now())],
           pricePaid:  [myRand_4]
     }
  
    disp = function displayActualData(){  
        document.getElementById('display').appendChild(document.createTextNode( 
                                                                
                                            newObject.storeNumber + ' '
                                            + newObject.salesPersonID + ' ' 
                                            + newObject.itemNumber + ' ' 
                                            + newObject.timePurch + ' '
                                            + newObject.pricePaid + '  '))}
    }
const getRand = (min, max) => {
        var randInt = (Math.floor(Math.random() * (max - min + 1)) + min);
          return randInt;
}
const generateMongo = () => {

    let a = document.createElement('a');  
    let link = document.createTextNode("This is link");  
    a.appendChild(link);  
    a.title = "This is Link";  
    a.href = "http://localhost:3000/newOrder";  
      
    document.body.appendChild(a); 
     
    /*  for(let i =0; i < newObject.storeNumber.length; i ++){

        a.push(newObject.storeNumber[i]);
        b.push(newObject.salesPersonID[i]);
        c.push(newObject.itemNumber[i]);
        d.push(newObject.timePurch[i]);
        e.push(newObject.pricePaid[i]); 
                  
     }   
     newObject = {
         storeNumber: a,
         salesPersonID: b,
         itemNumber: c,
         timePurch: d,
         pricePaid: e
     } */
}
mainData();
