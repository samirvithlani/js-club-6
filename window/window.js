function openObj(){
    window.open("http://www.google.com", "google", "width=400, height=400");
}
function closeObj(){
    window.close();
}
function moveObj(){
    alert("Move to 100, 50");
    window.moveTo(50, 50);
}
function resizeObj(){
    
    window.resizeTo(200, 200);

}     

function screenObj(){
    console.log(window.screenX)
    console.log(window.screenY)
    console.log(window.screen.colorDepth)
    console.log(window.screen.pixelDepth)
    console.log(window.screen.availWidth)
    console.log(window.screen.availHeight)
    

}