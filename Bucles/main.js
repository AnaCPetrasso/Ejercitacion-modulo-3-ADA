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
    while(array.length< numero){
        array.push(valor)
    }
    return array
}
console.log(repetir('lovelace', 3)) // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir('a', 5)) // ['a', 'a', 'a', 'a', 'a']
console.log(repetir('html', 0)) // []
