//JSON java script object notation
var employee = {
    name:"John",
    age:30,
    city:"New York",
    isActive:true
}


var data = {

    obj :{
        name:"John",
        age:30,
        city:"New York",
        isActive:true
    },
    message :{
        value:"success"

    }
}

var students = {

    name:"John",
    age:30,
    city:"New York",
    isActive:true,  
    course:{
        name:"java",
        duration:3,
        fee:10000
    }

}

console.log(students.course.name);
console.log(students.course.duration);