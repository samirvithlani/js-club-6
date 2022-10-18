var users = ["jay","raj","jiya",'megha',"priya","sita","gita"];

//loop
//for
// for(var i=0;i<users.length;i++){
    
//     if(users[i].charAt(0) == "j"){
//       //push

//     }
// }

var employees = [
    {
        id:1,
        name:"jay",
        age:20,
        salary:20000,
        isActive:false
        
    },

    {
        id:2,
        name:"parth",
        age:25,
        salary:26500,
        isActive:false
        
    },
    {
        id:3,
        name:"jiya",
        age:45,
        salary:35400,
        isActive:true
        
    },
]

// var empl = employees.filter((emp)=>{
    
//     return emp.isActive
// })
// console.log(empl)

var newemployees = employees.filter((emp)=>{

    return emp.id !== 2
})
console.log(newemployees)



var x = users.find((u)=>{
    return u.startsWith("x")
})
//some

var p = users.some((u)=>{
    return u.startsWith("j")
})
console.log(p)

var p = users.every((u)=>{
    return u.startsWith("j")
})
console.log(p)


//users = users.fill("jay",1,3)
console.log(users)

console.log(users.includes("jay"))
//users.copyWithin(1,3,5)
var x1 = users.flatMap((u)=>{
    return u.toUpperCase()
})
console.log(x1)



