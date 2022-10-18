languages = ['C', 'C++', 'Java', 'Python', 'Ruby', "Go",'Perl', 'PHP', 'JavaScript',"C#"];
numbers = [100,25,1,58,63,5,87,96,3652,45]

// for(var i=0;i<languages.length;i++){
//     console.log(languages[i]);
// }

// languages.forEach((x)=>{
//     console.log(x);
// })

// languages.map((p)=>{
//     console.log(p);
// })

// function sortByLen(a,b){

//     return a.length - b.length;
// }
// languages.sort(sortByLen)

//languages.sort((a,b)=>a.length - b.length)
// languages.sort((a,b)=>{
//     return a.length - b.length;
// })
console.log(languages);
console.log(numbers);
console.log(numbers.sort((a,b)=>a-b));

languages.push("Swift");
console.log(languages);     
var removed = languages.pop();
console.log(removed);
console.log(languages);

languages.unshift("Swift");
console.log(languages);
removed = languages.shift();
console.log(removed);
console.log(languages);



