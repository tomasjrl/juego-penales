import {getComputadoraOpciones , condicionGanador } from "./funciones.js";

export let puntajes = {
    jugadorPuntaje: 0,
    computadoraPuntaje: 0,
    penalNumero: 0,
    pateadorTurno: true
};

export let ComputadoraEleccion;
export let jugadorEleccion;

// Agregar evento de escucha a los botones
document.querySelectorAll('.opcion').forEach(button => {
    button.addEventListener('click', function() {
        jugadorEleccion = this.getAttribute('data-opcion'); // Obtener el valor de data-opcion

        getComputadoraOpciones();
        playGame(jugadorEleccion);
    });
});



function playGame(jugadorEleccion) {
    puntajes.penalNumero++; 
    console.log(puntajes.penalNumero);

    ComputadoraEleccion = getComputadoraOpciones();
    const result = condicionGanador(jugadorEleccion, ComputadoraEleccion, puntajes);



    const casillero = document.getElementById(puntajes.penalNumero); // Obtener la casilla correspondiente al turno actual
    casillero.innerHTML = `<img src="${jugadorEleccion !== ComputadoraEleccion ? 'assets/marcador/convertido.svg' : 'assets/marcador/fallado.svg'}">`;
        
    // Actualizar el marcador
    document.getElementById('jugador-puntaje').innerText = puntajes.jugadorPuntaje;
    document.getElementById('computadora-puntaje').innerText = puntajes.computadoraPuntaje;



    // Cambiar el puntajes.penalNumero
    puntajes.pateadorTurno = !puntajes.pateadorTurno;


    console.log(`diferencia: ${puntajes.jugadorPuntaje - puntajes.computadoraPuntaje} ` );



    if (puntajes.penalNumero === 6 || puntajes.penalNumero === 7) {
        // Verificar si hay una diferencia de 3 goles en el marcador
        if (Math.abs(puntajes.jugadorPuntaje - puntajes.computadoraPuntaje) === 3) {
            setTimeout(() => { if (puntajes.jugadorPuntaje > puntajes.computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            document.querySelectorAll('.casillero img').forEach(img => img.remove());
            reinicioJuego();
        }, 100); // Retardo de 100 milisegundos
        }
    }

    if (puntajes.penalNumero === 8 ) {
        // Verificar si hay una diferencia de 2 goles en el marcador
        if (Math.abs(puntajes.jugadorPuntaje - puntajes.computadoraPuntaje) === 2) {
            setTimeout(() => {  if (puntajes.jugadorPuntaje > puntajes.computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            document.querySelectorAll('.casillero img').forEach(img => img.remove());
            reinicioJuego();
        }, 100); // Retardo de 100 milisegundos
        }
    }

    if (puntajes.penalNumero === 9) {
        // Verificar si hay una diferencia de 2 puntos en el marcador
        if (Math.abs(puntajes.jugadorPuntaje - puntajes.computadoraPuntaje) === 2 || puntajes.jugadorPuntaje - puntajes.computadoraPuntaje === -1) {
            setTimeout(() => {  if (puntajes.jugadorPuntaje > puntajes.computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            document.querySelectorAll('.casillero img').forEach(img => img.remove());
            reinicioJuego();
        }, 100); // Retardo de 100 milisegundos
        }
    }

    if (puntajes.penalNumero >= 10 && puntajes.penalNumero % 2 === 0) {
        // Verificar si hay una diferencia de 1 punto en el marcador
        if (Math.abs(puntajes.jugadorPuntaje - puntajes.computadoraPuntaje) === 1) {
            setTimeout(() => {
                if (puntajes.jugadorPuntaje > puntajes.computadoraPuntaje) {
                    alert("¡Felicidades! Has ganado el juego.");
                } else if (puntajes.computadoraPuntaje > puntajes.jugadorPuntaje) {
                    alert("¡La computadora ha ganado el juego!");
                }
                document.querySelectorAll('.casillero img').forEach(img => img.remove());
                reinicioJuego();
            }, 100); // Retardo de 100 milisegundos
        } else {  
            setTimeout(() => {
            puntajes.penalNumero = 8; // Volver al turno 8
            document.querySelectorAll('.casillero img').forEach(img => img.remove());
        }, 500); // Retardo de 500 milisegundos
        }
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `
        Tú elegiste: ${jugadorEleccion} <br>
        La computadora eligió: ${ComputadoraEleccion} <br>
        ${result}
    `;
}

function reinicioJuego() {
    puntajes.jugadorPuntaje = 0;
    puntajes.computadoraPuntaje = 0; 
    puntajes.penalNumero = 0; 
    puntajes.pateadorTurno = true; 

    document.getElementById('jugador-puntaje').innerText = puntajes.jugadorPuntaje;
    document.getElementById('computadora-puntaje').innerText = puntajes.computadoraPuntaje;
    document.getElementById('result').innerHTML = "¡El juego ha finalizado!";
    
    // Borra el mensaje después de 500 milisegundos
    setTimeout(() => {
        document.getElementById('result').innerHTML = "";
    }, 1000);
    
    document.querySelectorAll('.casillero img').forEach(img => img.remove());
}