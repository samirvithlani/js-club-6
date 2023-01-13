function getData(){


        var xmlhtp = new XMLHttpRequest();
        //true is for asynchronous
        //false is for synchronous
        xmlhtp.open("GET","https://reqres.in/api/users?page=2",true);
        xmlhtp.send();
        //onreadyState 
        //0 - request not initialized
        //1 - server connection established
        //2 - request received
        //3 - processing request
        //4 - request finished and response is ready
        
        xmlhtp.onload = function(){
            if(this.status == 200){
                console.log(this.responseText);
            }
        }
        xmlhtp.onprogress = function(){
            console.log("onprogress",this.readyState);
        }
        xmlhtp.onloadstart = function(){
            console.log("onloadstart",this.readyState);
        }
        xmlhtp.onloadend = function(){
            console.log("onloadend",this.readyState);
        }


        // xmlhtp.onreadystatechange = function(){
        //     if(this.readyState == 0){
        //         console.log(this.responseText);
        //     }
        //     else if(this.readyState == 1){
        //         console.log("1",this.responseText);
        //     }
        //     else if(this.readyState == 2){
        //         console.log("2",this.responseText);
        //     }
        //     else if(this.readyState == 3){
        //         console.log("3",this.responseText);
        //     }
        //     else if(this.readyState == 4 && this.status == 200){
        //         console.log("4",this.status);
        //         console.log("4",this.responseText);
        //     }
        // }



}