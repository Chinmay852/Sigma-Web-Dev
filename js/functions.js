function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are fine")
    console.log("hey " + name + " you are nice")
}

function sum(a,b, c=5) {
    // console.log(a+b)
    return a + b + c
}

result1=sum(3,5)
result2=sum(4,5)
result3=sum(3,6,1)
console.log("The sum of two number is: ", result1)
console.log("The sum of two number is: ", result2)
console.log("The sum of two number is: ", result3)

nice("Chinmay")


//Arrow Function

const func1 = (x)=>{
    console.log("I am a arrow function:", x)
}

func1(55)
func1(60)
func1(70)
func1(85)













