

document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById('button1').addEventListener("click", function(){
        document.getElementById('textbox1').value = 'done';
    })
})

let infos = {
    firstName : "Angelique",
    lastName: "Refahiyat"

}

document.getElementById('button2').addEventListener("click", async function(){
  
    let myVar = {
        firstName: 'Angeliique',
        lastName: 'Refahiyat'
    }
    fetch("http://localhost:3000/newOrder", {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(myVar)
        //body: {"id" : document.getElementById('saada').value}
    }).
    then(response => {
        if (response.ok) {
            response.json()
            .then(json => {
              console.log(json);

        document.getElementById('show').innerHTML = 'Angelique'
            })
        }
       
    });
      
})