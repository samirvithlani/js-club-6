function getLocation1(){
    console.log(window.location.href)
    console.log(window.location.protocol)
    console.log(window.location.pathname)

}

function navigation1(){

    window.navigator.geolocation.getCurrentPosition(function(postion){

        console.log(postion.coords.latitude)
        console.log(postion.coords.longitude)
    })
    if(!window.navigator.cookieEnabled){
        alert("Cookies are disabled")
    }
    //setcokkie
    document.cookie = "name=John Doe";
}