function uptest(event) {

    console.log("test",event);
    console.log("test",event.key);
}
function demo1(event){

    console.log("demo1",event);
    
}

function demo2(event){

    console.log("demo2",event);
    document.getElementById("div1").style.backgroundColor="red";
}
function demo3(event){

    console.log("demo2",event);
    document.getElementById("div2").style.backgroundColor="green";
}

function demo4(event){

    document.getElementById("img").height = 400;
    document.getElementById("img").width = 400;
    console.log("demo4",event);
}