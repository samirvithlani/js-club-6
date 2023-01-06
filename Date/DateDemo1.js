const date = new Date(2012,0,2);


console.log(date);
console.log(date.toDateString());
console.log(typeof(date.toTimeString()));
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());
console.log(date.toISOString());

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date.getMinutes());
console.log(date.getMonth());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(date.getTimezoneOffset());
console.log(date.getUTCDate());
console.log(date.getUTCDay());
console.log(date.getUTCFullYear());
console.log(date.getUTCHours());
console.log(date.getUTCMilliseconds());
console.log(date.getUTCMinutes());
console.log(date.getUTCMonth());
console.log(date.getUTCSeconds());
console.log(date.getYear());
console.log(date.getTimezoneOffset());

var mils = Date.parse('2012-01-26T13:51:50');
var date1 = new Date(mils);
console.log("date1.....",date1)

//set methods
var date3 = new Date();
date3.setFullYear(2012);

console.log(date3.getFullYear());


function getDate1(){

    
    var x = document.getElementById("dt").value
    var y = document.getElementById("tm").value
    console.log(x)
    console.log(y)
    let dt = new Date(x,y);
    console.log(dt);

}




