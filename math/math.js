console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)
console.log(Math.SQRT1_2)
console.log(Math.LN2)
console.log(Math.LN10)
console.log(Math.LOG2E)
console.log(Math.LOG10E)
//rounding
console.log(Math.round(4.4)) // 5
console.log(Math.ceil(10.2)) // 5
console.log(Math.floor(10.9)) // 10
console.log(Math.trunc(10.9)) // 10
userss = [10,20,30,-12]

console.log(Math.sign(userss[0])) // 1
console.log(Math.pow(2,3)) // 8
console.log(Math.sqrt(9)) // 3
console.log(Math.sin(90)) // 0.8939966636005579
console.log(Math.cos(90)) // -0.4480736161291701
console.log(Math.tan(90)) // -2.185039863261519
console.log(Math.random()) // 0.123456789

console.log(Math.floor(Math.random() * 10000))
console.log(Math.sin(Math.random()) * 100)


function genRandom(min,max){

       //0 , 9
    return Math.floor(Math.random()*(max-min+1)+min)

}

console.log(genRandom(0,9))


