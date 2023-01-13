//13-01-2023
//parse -->
//pasrsAsync  --> promise

function demo(){

    return new Promise(function(resolve, reject){
            setTimeout(function(){    
                //resolve("Hello World")
                reject("err")
    
            }, 2000)    
    })

}

async function test(){

    try{
    var res = await demo()
    console.log(res)
    }catch(err){
        console.log(err)
    }
    
}
test()

// demo().then(()=>{
//     console.log("Hello World")
// }).catch(()=>{
//     console.log("Error")
// })

