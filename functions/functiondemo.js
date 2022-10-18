//2 type pD =  UDF
// 4 type w r wa ,
 //wo woa 
 //signature --> reurn type, name, parameters

 function add(a,b){

    return a + b
 }
 var x = add(10,20)
console.log(x)

function sq(){

    var x  =100
    console.log(x*x)
}
sq()

//lambda  / arrow function

var sum = () =>{

    console.log("hello")
}
sum()

var powbase = (pow,base)=>{

    return pow**base
}
powbase(2,3)


function mul (x){

    return x*x
}


const sqr = (x) =>{

        const demo = (x) =>{

            return x*x
        }
        return demo(x)
}

var p = sqr(10)
console.log("p=->",p)

console.log(mul(powbase(10,2)))




