async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })

}
async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
    return 455
      
}


async function main() {
    console.log('Loading Modules');
    console.log('Do Something else');
    console.log('Load data');

    let data = await getData()
    console.log(data);

    console.log('process data')

    console.log('task 2');
}

main();


// Callbacks
// data.then((v) => {
//     console.log(data);

//     console.log('process data')

//     console.log('task 2');
// })