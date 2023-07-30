// ____________________________________________________obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos
const numbers = [5, 3]
//quiero hacer una función que "recorra" el array y me devuelva el numero mas chico
const obtenerMenor = numbers => {
    return Math.min(...numbers) //esto todavia no lo vimos 
}
console.log(obtenerMenor(numbers))
//otra forma de hacerlo seria: 
const obtenerMenorII = numbers => {
    let searchNumber = numbers[0] // Puedo poner +Infinity tmb
    for (const number of numbers) {
        if (number < searchNumber) {
            searchNumber = number
        }
    }
    return searchNumber
}
console.log(obtenerMenorII(numbers))
// ____________________________________________________sumar(numeros)
//Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos.
//sumarNumeros([5, 7, 10, 12, 24]) // 58

const sumarNumeros = (numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length ; i++) {
        sum += numbers[i];
    }
    return sum
}
console.log(sumarNumeros(numbers))