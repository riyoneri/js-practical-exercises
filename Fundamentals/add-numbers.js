const addNumber = str => Function(`return ${str}`)()

console.log(addNumber("5 + 4 * 3 / 2 - 1"));
console.log(addNumber("( 2 + 3 ) * ( 4 - 1 )"));