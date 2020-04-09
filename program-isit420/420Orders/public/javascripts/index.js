
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
let myRand = infos.storeNumber[Math.floor(Math.random() * infos.storeNumber.length)];
let myRand_2 = infos.salesPersonID[Math.floor(Math.random() * infos.salesPersonID.length)];
let myRand_3 = infos.itemNumber[Math.floor(Math.random() * infos.itemNumber.length)];
let myRand_4 = infos.pricePaid[Math.floor(Math.random() * infos.pricePaid.length)];
let newObject = {
       storeNumber:  myRand,
       salesPersonID: myRand_2,
       itemNumber: myRand_3,
       timePurch: Date(Date.now).toString(),
       pricePaid: myRand_4
 }
document.addEventListener("DOMContentLoaded", function(event){

    document.getElementById('button1').addEventListener("click", function(){
            document.getElementById('show').innerHTML += myRand + ' ' + myRand_2 + ' ' + myRand_3 
             + ' ' + myRand_4 + ' ' + infos.timePurch.toString();   
    })
})

document.getElementById('button2').addEventListener("click", async function(){
  
    $.ajax({
        url: '/newOrder/',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(newObject),
        success: function (result) {
           
        }

    })  })      