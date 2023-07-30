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
// ____________________________________________________contiene(numero, numeros)
//Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true 
//o false dependiendo de si dicho numero se encuentra en el array de numeros
//https://es.javascript.info/
const contiene = (number, numbers) => {
    return numbers.includes(number, 0)
}
console.log(contiene(9, numbers))
console.log(contiene(8, numbers))
// ____________________________________________________invertirCaso(string)
//Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso
// invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const invertirCaso = (string) => {
    let newString = ''
    for (i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            newString += string[i].toLowerCase()
        }
        else {
            newString += string[i].toUpperCase()
        }
    }
    return newString
}
// en Mumuki
const invertirCaso2 = (string) => {
    let newString = ''
    for (const elemento of string) {
        if (elemento === elemento.toUpperCase()) {
            newString += elemento.toLowerCase()
        }
        else {
            newString += elemento.toUpperCase()
        }
    }
    return newString
}
console.log(invertirCaso('feliz cumple'))
console.log(invertirCaso2('Ada Lovelace'))
console.log(invertirCaso('jAvAsCrIpT'))
// ____________________________________________________gano(tragamonedas)
//Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. 
//Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.
const tragamonedas = ['💫', '💫', '💫', '💫', '💫']
const gano = tragamonedas => {
    tragamonedas = tragamonedas.slice(0, 5) //aca considero solo los  5 primeros elementos
    for (i = 1; i < tragamonedas.length; i++) { //recorro  el aray desde el 1 para comparlo con  los demas
        if (tragamonedas[i] !== tragamonedas[0]) { 
            return false
        } else {
            return true
        }
    }
}
console.log(gano(tragamonedas))