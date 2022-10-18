//console

//dev testing production

console.log("log");
console.info("info");
console.warn("warn");
console.error("error");

//var let const
//var is global scope
//let is block scope
//const is constant final

var a = 10;
var f= 12.25
var s = "jay"
var b = true
var n = null


console.log(a);
console.log(f);
console.log(s);
console.log(b);
console.log(n);

console.log(typeof(a));
console.log(typeof(f));
console.log(typeof(s));
console.log(typeof(b));
console.log(typeof(n));
let ename = "jay"
console.log(ename);
const ifsc = "SBIN0000001"
console.log(ifsc);
//ifsc = "SBIN0000002"

//operators

///type

//arithmatic + - * / % ++ --
//relational < > <= >= == !=,===,!==,==
//logical && || !
//bitwise & | ^ ~ << >>
//assignment = += -= *= /= %= <<= >>= &= ^= |=
//ternary ?:

var no1 = 100
var no2 = 100
var res = no1 + no2
console.log(res);

//if else  // switch // loops

if(no1> no2){
    console.log("no1 is greater");
}
else if (no1 ==no2){
    console.log("equal");
}
else{
    console.log("no2 is greater");
}


no = 12
            //&&
/// T   T     T
//F   -    F
//T     F  F

    //||

    //F  t T
    //F F F
    //T  - T




if(no %2 ==0 && no %3 ==0){
    console.log("divisible by 2 and 3");
}
else{
    console.log("not divisible by 2 and 3");
}

var choice =10
switch(choice){

    case 1:
        console.log("one");
    break;

    default:
        console.log("default");
    break;

}




///
var p = 100
var q = 200

var temp
if(p>q){
    temp = p
}
else{
    temp =q
}


temp = p > q ? p : q
console.log(temp);

var aa = "100"
var aaa = 100

if(aa === aaa){
    console.log("equal");
}
else{
    console.log("not equal");
}