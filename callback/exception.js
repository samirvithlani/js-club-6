var x = 10,y=0;
function demo(){

    console.log("demo")

}
function demo2(){

    console.log("demo2")
}

function test(no,cb){
    
    cb()
    
}
try{
    var no = 1
    if(no == 10){
        test(no,demo)
    }
    else{
        throw new Error("Error")
    }
}catch(e){

    test(no,demo2)
}


