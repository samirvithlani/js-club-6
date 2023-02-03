const fetch1 =async () => {
  // const res = await fetch("https://reqres.in/api/users?page=2",{
  //     method: "GET",
  //     headers:{
  //         "Content-Type": "application/json"
  //     }
  // })
  // const data = await res.json()
  // console.log(data);

  
  fetch("https://reqres.in/api/users?page=2", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
};


const adddata = async () => {

    var data = {
        "name": "morpheus",
        "job": "leader"
    }
    const res = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })
    const data1 = await res.json()
    console.log(data1);

}




const deleteData = async () => {
    
        var id= 2;
        const res = await fetch("https://reqres.in/api/users/"+id, {
            method: "DELETE"
        })
        console.log(res.status);    
}