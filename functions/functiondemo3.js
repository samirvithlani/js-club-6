function demo(x){

    
    function inner(y){
        var d=10;
        console.log("inner function",y);
        return "inner function";
    }
    console.log("outer function");

    var p = inner(x);
    console.log(p);

    return p
}
x = demo(12);
console.log(x);


function test(x,y){

    return function inner(a,b){

        return a * b;
    }

    //return inner(x,y);

}
//console.log("test...",test(10,2))
// var t = test(10,2);
// var ans = t(10,2)
// console.log("ans...",ans)
console.log(test(10,2)(10,2))