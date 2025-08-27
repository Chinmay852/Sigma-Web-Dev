let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")
if (isNaN(a) || isNaN(b))
    throw SyntaxError("Sorry Please Enter Valid Number")

let sum = parseInt(a) + parseInt(b)

function main() {
    let x = 1;

    try {
        console.log("The sum is ", sum * x)
        return true
    }
    catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
// The finally block always runs, even if try or catch has a return. 
// It is usually used for cleanup tasks like closing files or database connections.

    finally {
        console.log("Files are being closed and db connection is being closed")

    }

}

let c = main()
