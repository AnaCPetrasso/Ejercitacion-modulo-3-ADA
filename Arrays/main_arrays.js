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
    for (let i = 0; i < numbers.length; i++) {
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
// ____________________________________________________estanJuntos(personajes)
//Crear una función estanJuntos que tome como argumento un array de strings personajes,
// y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:
const estanJuntos = (personajes) => {
    while (personajes[i] === "Frodo" && personajes[i - 1] === "Sam" || personajes[i + 1] === "Sam") {
        return true
    }
    return false
}
console.log(estanJuntos(['Sam', 'Frodo', 'Legolas']))
console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))
console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))

// ____________________________________________________separar(perrosYGatos)
//Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados
// por un lado y los gatos por otro.
//uso d para perros (dog) y c para gatos (cat) porque no me toma los emojis como  validos 
const separar = (string) => {
    let perros = ''
    let gatos = ''
    for (i = 0; i < string.length; i++) {
        if (string[i] === 'd') {
            perros += 'd'
        } else {
            gatos += 'c'
        }
    }
    return perros.concat(gatos)
}
console.log(separar('ddcdcdcddccd'))
// ____________________________________________________obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:
// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
const obtenerChatStatus = (usuarias) => {
    let cantidad = usuarias.length
    if (cantidad == 1) {
        return usuarias[0] + ' está conectada'
    } if (cantidad == 2) {
        return usuarias[0] + ' y ' + usuarias[1] + ' están conectadas'
    } else {
        return usuarias[0] + ' , ' + usuarias[1] + ' y ' + (cantidad - 2) + ' persona (s) más están conectadas'
    }
}
console.log(obtenerChatStatus(['Ada']))
console.log(obtenerChatStatus(['Ada', 'Grace']))
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie']))
console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie', 'Anne']))
// ____________________________________________________ germinar(plantines)
//Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor.
// La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda.
//p = plantines t=plnta1 s=planta2 y=planta3
//quiero hacer una función que me indique cual el la ultima letra distita de p
const nearPlant = (string) => {
    for (i = 0; i < string.length; i++) {
        if (string[i] == 'p') {
            return string[i - 1]
        }
    }
}
console.log(nearPlant('srsp'))

const germinar = (string) => {
    let plantas = []
    if (string[0] != 'p') {
        for (const letra of string) {
            if (letra == 'p') {
                plantas.push(nearPlant(string))
            } else {
                plantas.push(letra)
            }
        }
    } else {
        return 'el string debe comenzar con una planta no un plantin'
    }
    return plantas.join()
}
console.log(germinar('tp'))
console.log(germinar('pty'))
console.log(germinar('tppssppyypp')) //no se cumple, me cambia todas por la primera p que encuentra
// ____________________________________________________ comer(plantas)
//Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido.
// El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido.
// El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). 
//p => planta c=>conejo s=>stop
const comer = (plantas) => {

}
// ____________________________________________________ multiplicar(multiplicador, numeros)
//Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array 
//donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado.
const multiplicar = (multiplicador, numeros) => {
    let newNumeros = []
    for (const number of numeros) {
        newNumeros.push(number * multiplicador)
    }
    return newNumeros
}
console.log(multiplicar(2, [5, 7, 15, 22, 40]))
console.log(multiplicar(10, [2, 5, 77]))
// ____________________________________________________ recortar(cantidadLetras, palabras)
//Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras 
//pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.
const recortar = (cantidadLetras, palabras) => {
    let newPalbras = []
    for (const palabra of palabras) {
        newPalbras.push(palabra.slice(0, cantidadLetras))
    }
    return newPalbras
}
console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))
console.log(recortar(8, ['algoritmo', 'bug', 'compilador']))
// ____________________________________________________ sonIguales(a, b)
//Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición,
// o false sino.
const sonIguales = (a, b) => {
    let newA = a.join()
    let newB = b.join()
    if (newA == newB) {
        return true
    } else {
        return false
    }
}
console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]))
console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]))
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]))
// ____________________________________________________ obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
//Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, 
//y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o 
//Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente
// dependiendo de quien tenga el puntaje más alto.

const obtenerResultado = (jugadoraA, jugadoraB, puntajeA, puntajeB) => {
    let contadorA = 0
    let contadorB = 0
    for (let i = 0; i < puntajeA.length && i < puntajeB.length; i++) {
        if (puntajeA[i] > puntajeB[i]) {
            contadorA += 1
        }
        else {
            contadorB += 1
        }
    }
    if (contadorA > contadorB) {
        return (`gana ${jugadoraA} `)
    } if (contadorA == contadorB) {
        return ('empate')
    } else {
        return (`gana ${jugadoraB} `)
    }


}
console.log(obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]))
console.log(obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]))
console.log(obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]))
// ____________________________________________________ jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
//Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente,
// y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud.
// La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna.
// Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente
// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadaA, jugadaB) => {
    let contador1 = 0
    let contador2 = 0
    for (let i = 0; i < jugadaA.length && i < jugadaB.length; i++) {
        if (jugadaA[i] === jugadaB[i]) {
            contador1 += 1
            contador2 += 1
        }
        else if (jugadaA[i] == 'papel' && jugadaB[i] == 'tijera' || jugadaA[i] == 'tijera' && jugadaB[i] == 'piedra' || jugadaA[i] == 'piedra' && jugadaB[i] == 'papel') {
            contador2 += 1
        } else if (jugadaA[i] == 'papel' && jugadaB[i] == 'piedra' || jugadaA[i] == 'tijera' && jugadaB[i] == 'papel' || jugadaA[i] == 'piedra' && jugadaB[i] == 'tijera') {
            contador1 += 1
        }
    }
    if (contador1 > contador2) {
        return `gana ${jugadoraA}`
    }
    if (contador1 < contador2) {
        return `gana ${jugadoraB}`
    }
    else {
        return `empate`
    }
}
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera', 'papel'], ['piedra', 'papel']))
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['piedra']))
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']))
console.log(jugarPiedraPapelTijeras(
    'Ada',
    'Grace',
    ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
    ['papel', 'piedra', 'tijera', 'tijera', 'papel']))

//   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Ejercicios con DOM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

// 📝-------------------------------------------------------------------------- Lista de tareas
// Crear un programa que muestre:

// un input de texto
// un botón que diga Agregar tarea
// una lista ul
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array





// 🔍 Buscador
// Crear un programa que muestre:

// un input de texto
// una lista ul
// El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

// Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

// TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

// 📈 Total de gastos
// Crear un programa que muestre:

// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.