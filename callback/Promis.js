//promise stage
// const PENDING = 'pending';
// const FULFILLED = 'fulfilled'; //resolved
// const REJECTED = 'rejected';

var data = new Promise(function(resolve, reject) {

    setTimeout(() => {
        reject('error');
    }, 2500);
    

});

console.log(data);
data.then((res)=>{
    console.log(res);
    
}).catch((err)=>{
    console.log(err);
})