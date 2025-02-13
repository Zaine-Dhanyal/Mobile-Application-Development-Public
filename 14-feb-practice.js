const object= [
    {
        Model:1984,
        color:'Blue'
    },
    {
        Model:2004,
        color:'Red'
    },
   
]
function Cars(data){
    console.log(data);
}
let newarr = object.map(Cars);
console.log(newarr);