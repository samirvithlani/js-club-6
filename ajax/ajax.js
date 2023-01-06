
function getapicall(){

//ajx xhr request 
    var httprequest = new XMLHttpRequest();
    httprequest.open('GET',"https://reqres.in/api/users?page=2")
    httprequest.send()
    httprequest.onload = function(){
        console.log(httprequest.responseText)

    }

}
getapicall()

function postApirequest(){

    var httprequest = new XMLHttpRequest();
    var user = {
        name:"morpheus",
        job:"leader"
    }
    httprequest.open('POST',"https://reqres.in/api/users")
    httprequest.setRequestHeader("Content-Type","application/json")
    httprequest.send(JSON.stringify(user))
    httprequest.onload = function(){
        console.log(httprequest.responseText)

    }
}
postApirequest()