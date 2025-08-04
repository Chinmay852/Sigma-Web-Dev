// console.log("I am tutorial on loop");

// let a = 2;
// for(let i=1; i<=10; i++){
//     console.log("2 X" ,i, "=", a * i)
// }

let obj = {
    name: "Chinmay",
    role: "Owner",
    company: "Shree Swami Samarth Enterprise"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        
    }
}