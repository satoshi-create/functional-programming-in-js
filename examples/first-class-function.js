const multiply3 = a => a * 3

const arrayOfFuncs = [a => a * 2, a => a * 3, multiply3]

const mapOfFunc = {
  sum: (a, b) => a + b,
  multiply: (a, b) => a * b,
}

const functionsAsArgs = (func, value) => func(value)

const functionAsReturnValue = () => () => 'Hi!!!'
const returnFunction = functionAsReturnValue()


console.log(multiply3(1))
console.log(arrayOfFuncs[0](2))
console.log(mapOfFunc.sum(2, 3))
console.log(functionsAsArgs(multiply3, 2))
console.log(returnFunction())
