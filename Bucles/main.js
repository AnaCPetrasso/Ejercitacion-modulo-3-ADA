//-------------------------------------------------------  ObtenerIndice(valor, array)
// Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.

// const obtenerIndice = (valor, array) =>{
//     for (let i=0; i < array.length; i++){
//         if(array[i]===valor){
//             return i
//         }
//     }
//     return -1
// }
const obtenerIndice = (valor, array) =>{
    return array.indexOf(valor)
}
console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])) // 2
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])) // -1
// -------------------------------------------------------  repetir(valor, cantidad)
// Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.
const repetir = (valor, numero)=>{
    let array = []
    while(array.length < numero){
        array.push(valor)
    }
    return array
}
console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
console.log(repetir('html', 0)) // []
// sumarImparesHasta(numero)
// Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusiv
const sumarImparesHasta =(numero)=>{
    let cont = 0
    for (let i = 1; i <= numero; i += 2) {
        cont += i;
      }
    return cont
}
console.log(sumarImparesHasta(5))// 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)) // 49
console.log(sumarImparesHasta(47)) // 576

//--------------------------------------------------------  crearCuentaRegresiva(numeroInicial)
// Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.
const crearCuentaRegresiva =(numeroInicial)=>{
    let array =[]
    for (let i=numeroInicial; i>=0; i--){
        array.push(i)
    }
    return array
}
console.log(crearCuentaRegresiva(3)) // [3, 2, 1, 0]
console.log(crearCuentaRegresiva(5)) // [5, 4, 3, 2, 1, 0]

// ---------------------------------------------------------- invertir(array)
// Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.
const invertir =(array)=>{
    return array.reverse()
}
console.log(invertir([1, 2, 3])) // [3, 2, 1]
console.log(invertir([5, 7, 99, 34, 54, 2, 12])) // [12, 2, 54, 34, 99, 7, 5]
