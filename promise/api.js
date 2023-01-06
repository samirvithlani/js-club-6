
///get post put delete
function getAllData(){

    var data = fetch("https://reqres.in/api/users?page=2",{
        method:"GET"
    })
    data.then((d)=>{
        d.json().then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log("parsing error....",err)
        })
    }).catch(err=>{
        console.log("api error",err)
    })
}
getAllData()

//asycn await
async function getAllData1(){

    var data = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET"
    })
    
    var data1 = await data.json()
    console.log(data1)

}
getAllData1()


const addData = async()=>{

    var data = {
        name:"morpheus",
        job:"leader"
    }
    var res = await fetch("https://reqres.in/api/users?page=2",{method:"POST",},data)
    
    var data = await res.json()
    console.log(data)

}
addData()

const addData1 = ()=>{

    let user ={
        name:"morpheus",
        job:"leader"
    }


    var x = fetch("https://reqres.in/api/users?page=2",{method:"POST",body:JSON.stringify(user)})
    x.then((d)=>{
        d.json().then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log("parsing error....",err)
        })
    })



}
