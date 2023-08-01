// filter(array, callback)
// Crear una función filter que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// si dicho callback devuelve true, pushea el elemento a un nuevo array
// devuelva el array final con los elementos que pasaron el "filtro".
// Ejemplo:

//  const numeros = [10, 2, 3, 40, 33, 50]
//  const multiploDe10 = (x) => x % 10 === 0
 
  // [10, 40, 50]

// const filter = (array, callback) =>{
//     const newArray = []
//     for (item of array){
//         if(callback(item)){
//             newArray.push(item)
//         }
//     }
//     return newArray
// }

// const filter = (array, callback)=>{
//     const newArray =[]
//     for (let i = 0;i<array.length; i++ ){
//         if (callback(array[i])){
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }

// const filter = (array, callback) => {
//     return array.filter(callback)
// }
// console.log(filter(numeros, multiploDe10))

// ------------------------------------- some(array, callback)

//  Crear una función some que acepte un array y un callback y que:
//      por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//      devuelva true si al menos una de las llamadas al callback devolvió true

// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0

// const some = (array, callback)=>{
//     for(let i = 0; i< array.length; i++){
//         if (callback(array[i])){
//             return true
//         }
//     }
// } 
// const some = (array, callback) =>{
//     return array.some(callback)
// }

// console.log(some(numeros, multiploDe10)) // true
// console.log(some(numeros, esPositivo)) // true

// ---------------------------------------- find(array, callback)

//     Crear una función find que acepte un array y un callback y que:
//         por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//         devuelva el elemento pasado como argumento del primer callback que devuelva true
//         si ningún callback devuelve true, devuelva undefined
const numeros = [8, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0

const find = (array, callback) => {
     for (item of array){
         if(callback(item)){
             return item
         }
     }
     return undefined;
 }
//aca no se puede usar el opp ternario
console.log(find(numeros, multiploDe10))
