function changeData(){

    const h1 = document.createElement("h1")
    h1.innerHTML = "Hello World"

    const elm = document.getElementById("print");
    const child  =document.getElementById("p")
    elm.insertBefore(h1,child)
    elm.removeChild(document.getElementById("p1"))
    
    
}