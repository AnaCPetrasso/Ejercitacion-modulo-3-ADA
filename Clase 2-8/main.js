// const usuario = "florencia"
// const contrasenia = "hola1234"
// let intentos = 0
// while (intentos<3){
//     let user = prompt("ingrese su usuario")
//     let password = prompt ('ingrese su contraseña')
//     if(usuario === user && contrasenia === password){
//         alert ('bienvenida!')
//         break
//     }
//     intentos ++
// }
// alert('error')

function tirarMoneda() {
    const opciones = ["CARA", "CRUZ"];
    const resultadoAleatorio = Math.floor(Math.random() * 2);
    return opciones[resultadoAleatorio];
}

function main() {
    let rondasSeguidasAcertadas = 0;
    let maxRondasSeguidasAcertadas = 0;

    while (true) {
        const eleccion = prompt(
            "Elige CARA o CRUZ (o escribe SALIR para terminar el juego):"
        ).toUpperCase();

        if (eleccion === "SALIR") {
            console.log("Cantidad máxima de rondas seguidas acertadas: ", maxRondasSeguidasAcertadas);
            console.log("¡Gracias por jugar! Hasta luego.");
            break;
        }

        if (eleccion !== "CARA" && eleccion !== "CRUZ") {
            console.log("Opción inválida. Intenta de nuevo.");
            continue;
        }

        const resultado = tirarMoneda();
        console.log("Resultado: ", resultado);

        if (eleccion === resultado) {
            rondasSeguidasAcertadas++;
            if (rondasSeguidasAcertadas > maxRondasSeguidasAcertadas) {
                maxRondasSeguidasAcertadas = rondasSeguidasAcertadas;
            }
            console.log("¡Acertaste! Rondas seguidas acertadas: ", rondasSeguidasAcertadas);
        } else {
            rondasSeguidasAcertadas = 0;
            console.log("Fallaste. Rondas seguidas acertadas: 0");
        }
    }
}

main();

