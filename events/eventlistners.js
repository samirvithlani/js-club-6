document.getElementById("btn").addEventListener('click',function(){
    alert("Hello World");
})

document.getElementById("name").addEventListener("keyup",()=>{
    console.log(document.getElementById("name").value);
})