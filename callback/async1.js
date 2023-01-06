
function demo(){


        fetch("https://reqres.in/api/users?page=2",{
            method:"GET"
        }).then((d)=>{
            d.json().then(data=>{
                console.log(data)
            }).catch(err=>{
                console.log("parsing error....",err)
            })
        }).catch(err=>{
            console.log("api error",err)
        })


}
async function demo2(){

    var res = await  fetch("https://reqres.in/api/users?page=2",{
        method:"GET"
    })
    var data = await res.json()
    console.log(data)

}

//demo()
demo2()