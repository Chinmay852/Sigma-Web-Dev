// // reduce

let num = [1,2,3,4,5,6]

let fact = (a,b) =>{
    return a*b
}

console.log("Via Reduce",num.reduce(fact))

// console.log(num.reduce((a,b)=> a*b))

// for loop

let n = 6
let fact1 = 1

for (let i = n; i>=1; i--) {
   
    fact1 *=i;
}
console.log("Via loop",fact1)

