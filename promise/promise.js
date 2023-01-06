let promise = new Promise((data, err) => {

     
    
    
        data("Hello World") //resolve
    
    

})
promise.catch((err) => {
    console.log(err);
})
promise.then((data) => {
    console.log(data);
})