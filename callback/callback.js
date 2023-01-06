function demo(a, b) {
  console.log("Hello World", a, b);
  return a + b;
}
function test(a, cb) {
  let ans = cb(10, 20);
  console.log("Answer is ", ans);
}

test(100, demo);

const storage = (req,cb) => {

    var data = {
        fileName : req.file
    }
    console.log(req.file)
    if(req.file==undefined){
        console.log("file not found")
         cb("file not found")
    }
    else{
        cb(data)
    }
    
};

function upload(data)
{
    console.log("file upload successfully",data.fileName)
}

storage({file:undefined},upload)

