let newObject;
let build420 = [];
let holdNums = 0;

const mainData = () => {
    document.addEventListener("DOMContentLoaded", function(event){

        document.getElementById('button1').addEventListener("click", function(){
                  while(holdNums < 5){
                      getData();
                      holdNums++;
                  }
        })
    }) 
    document.getElementById('button2').addEventListener("click", function(){
            uploadData();
    
    })
    document.getElementById('button3').addEventListener("click", function(){
      //  generateMongo();
})    
}
                            
//    (async () => {
//         // console.log('here');
//         const response = await fetch('/newObject',{
//             method: 'GET',
//             headers: {
//                 "Accept": 'application/json , text/plain, */*',
//                 "Content-type": 'application/json'
//             }
//         });
//         console.log('got response');
//         try {
//           await response.json();
//         } catch(e) {
//           console.log('error:', e.message);
//         }
//       })();
const uploadData = () => {
    $.ajax({
       url: '/newOrder',
       method: 'POST',
       contentType: 'application/json',
       data: JSON.stringify(newObject),
       success: console.log(JSON.stringify(newObject))                       
   })     
   $.ajax({
       url: '/newOrder',
       method: 'GET',
       contentType: 'application/json',
       data: JSON.stringify(newObject),
       success: alert("get data: " + JSON.stringify(newObject))
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
           timePurch: [Date(Date.now).toString()],
           pricePaid: [myRand_4]
     }
     for(let i =0; i < newObject.storeNumber.length; i++){
     document.getElementById('show').innerHTML += 
                                          newObject.storeNumber[i] + ' '
                                        + newObject.salesPersonID[i] + ' ' 
                                        + newObject.itemNumber[i] + ' ' 
                                        + newObject.timePurch[i] + ' '
                                        + newObject.pricePaid[i] + '  ';
     }
      
     
    }

const getRand = (min, max) => {
        var randInt = (Math.floor(Math.random() * (max - min + 1)) + min);
          return randInt;
}
const generateMongo = () => {
     for(let i =0; i < newObject.storeNumber.length; i ++){
        build420.push(newObject.storeNumber[i],
         newObject.salesPersonID[i] ,
         newObject.itemNumber[i] ,
         newObject.timePurch[i] ,
         newObject.pricePaid[i]); 
         console.log('build420 is', build420);
         
     }   
     return build420;
    
}
mainData();