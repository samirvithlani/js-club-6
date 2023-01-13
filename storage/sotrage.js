function storeDemo(){

    //string....
    localStorage.setItem('name', 'John');
    sessionStorage.setItem('name', 'Jiya');
 
}
function geyItemDemo(){
    console.log(sessionStorage.getItem('name'));

    if(localStorage.getItem("name")!=null){
        console.log(localStorage.getItem("name"));
    }
    else{
        console.log("No data found");
    }

}
function removeDemo(){

    //localStorage.removeItem('name');
    //localStorage.clear();
}

storeDemo();
geyItemDemo();
//removeDemo();