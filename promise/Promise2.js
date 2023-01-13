//3 stage of promise
//1. pending
//2. fulfilled     {  observer.next()   observable --> pending --> fulfilled , observer.error()   observable --> pending --> rejected  }
//3. rejected

//Promise is class 

function demo(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("error")
        },2000)
    })
}


demo().then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})