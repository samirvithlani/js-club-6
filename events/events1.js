function demo(event){

        console.log("demo function called");
        console.log(event);
}

function demo2(event){

    //console.log("demo2 function called");
    var x = document.getElementById("name").value
    console.log(event);
    console.log(x);
}
function change(){

    document.getElementById("text").style.backgroundColor = "red";
    document.getElementById("h1").innerHTML = "Hie...";

}
function change1(){

    document.getElementById("text1").style.backgroundColor = "blue";
}
function change3(){
    alert("scrolling");
}

function valid(){

    alert("valid");
}
function change6(){

    document.getElementById("text3").style.backgroundColor = "green";
}