
var users = [];

function printData(){

    document.getElementById("printData").innerHTML = JSON.stringify(users);

}

function validate(){

    let name = document.getElementById("name").value;
    if(name!=null || name!=""|| name!=undefined){

        document.getElementById("nerror").innerHTML="Name is required";
        document.getElementById("submit").disabled=true;
    }
    else{
        
    }

}
function submit1(){

    //console.log("submit1");
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    //validtion



    users.push({name,age});

    printData();


}