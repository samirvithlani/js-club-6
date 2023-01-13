function submitdata(event){
    event.preventDefault();
    console.log("submitdata",event);
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("age").value);


}

function validate(){

    var x = document.getElementById("name").value;
    if(x.length < 4){
        document.getElementById("namerr").innerHTML = "Name must be atleast 4 characters";
        return false;
    }

}