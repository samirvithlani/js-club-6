class Vehicle{
    //var name;
    name;
    constructor(a,b){
        console.log("Vehicle constructor",a,b);
        this.name = "car";
    }
   

    getDtaa(){
        console.log("get data");
    }
    display() {
        
        //this.name = "Car";
        this.getDtaa();
        console.log(this.name);
    }

}

class Car extends Vehicle{
    constructor(){
        super();
    }
}
// var veh = new Vehicle(12);
// veh.display();

var c = new Car();