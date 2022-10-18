//immutable
var data = "employee";
//chatAt
console.log(data.charAt(0));
console.log(data.length)
//concat
//var data1 = "employer";
//data = data.concat(data1);
console.log(data);
//includes
var flag = data.includes("m", 2);
console.log(flag);
//indexOf
var index = data.indexOf("e",1);
console.log(index);
var index1 = data.lastIndexOf("e");
console.log(index1);

//slice
//data = data.slice(0,2)
console.log(data);

//split
console.log(data.split(""))

//toLowerCase
//data = data.toLowerCase();
data = data.replace("e","E");
console.log(data);

//data.substring(0,2);
//data.trim
data = data.repeat(5);
console.log(data);

