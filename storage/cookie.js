function storeCookie(){

    document.cookie = "name=John;expires=Fri, 13 Jan 2023 15:45:00 IST;";


}
function getCookie(){
    
        var x = document.cookie;
        console.log(x);
    
}

storeCookie();
getCookie();