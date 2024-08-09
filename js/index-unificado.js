let jugadorPuntaje = 0; 
let computadoraPuntaje = 0; 
let tandaDePenales = 1;
let penalNumero = 0;
let pateadorTurno = true; 

function getComputadoraOpciones() {
    const opciones = ['Izquierda', 'Centro', 'Derecha'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function condicionGanador(jugadorEleccion, ComputadoraEleccion) {
    if (jugadorEleccion === ComputadoraEleccion) {
        return "¡Penal atajado!";
    } else {
        if (pateadorTurno) {
            jugadorPuntaje++;
        } else {
            computadoraPuntaje++; 
        }
        return "¡GOL!"; 
    }
}

function playGame(jugadorEleccion) {
    penalNumero++; 
    console.log(penalNumero);

    const ComputadoraEleccion = getComputadoraOpciones();
    const result = condicionGanador(jugadorEleccion, ComputadoraEleccion);
    
    // Actualizar el marcador
    document.getElementById('jugador-puntaje').innerText = jugadorPuntaje;
    document.getElementById('computadora-puntaje').innerText = computadoraPuntaje;

    if (penalNumero % 2 === 0) { // Cada dos penalNumeros
        tandaDePenales++; 
        document.getElementById('tande-de-penales').innerText = tandaDePenales; // Imprimir el número de la ronda
    }

    // Cambiar el penalNumero
    pateadorTurno = !pateadorTurno;


console.log(`diferencia: ${jugadorPuntaje - computadoraPuntaje} ` );



    if (penalNumero === 6 || penalNumero === 7) {
        // Verificar si hay una diferencia de 3 goles en el marcador
        if (Math.abs(jugadorPuntaje - computadoraPuntaje) === 3) {
            if (jugadorPuntaje > computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            reinicioJuego();
        }
    }

    if (penalNumero === 8 ) {
        // Verificar si hay una diferencia de 2 goles en el marcador
        if (Math.abs(jugadorPuntaje - computadoraPuntaje) === 2) {
            if (jugadorPuntaje > computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            reinicioJuego();
        }
    }

    if (penalNumero === 9) {
        // Verificar si hay una diferencia de 2 puntos en el marcador
        if (Math.abs(jugadorPuntaje - computadoraPuntaje) === 2 || jugadorPuntaje - computadoraPuntaje === -1) {
            if (jugadorPuntaje > computadoraPuntaje) {
                alert("¡Felicidades! Has ganado el juego.");
            } else {
                alert("¡La computadora ha ganado el juego!");
            }
            reinicioJuego();
        }
    }

    if (penalNumero >= 10 && penalNumero % 2 === 0) {
        // Verificar si hay una diferencia de 1 punto en el marcador

        if (jugadorPuntaje > computadoraPuntaje) {
            alert("¡Felicidades! Has ganado el juego.");
            reinicioJuego();
        } else if (computadoraPuntaje > jugadorPuntaje) {
            alert("¡La computadora ha ganado el juego!");
            reinicioJuego();
        } else {
            // Continuar con la siguiente ronda
            tandaDePenales++;
            document.getElementById('tande-de-penales').innerText = tandaDePenales; // Imprimir el número de la ronda
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
    jugadorPuntaje = 0;
    computadoraPuntaje = 0; 
    tandaDePenales = 1; 
    penalNumero = 0; 
    pateadorTurno = true; 

    document.getElementById('jugador-puntaje').innerText = jugadorPuntaje;
    document.getElementById('computadora-puntaje').innerText = computadoraPuntaje;
    document.getElementById('result').innerHTML = "¡El juego ha sido reiniciado!";
    document.getElementById('tande-de-penales').innerText = "1";
}

// Agregar evento de escucha a los botones
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', function() {
        const jugadorEleccion = this.getAttribute('data-choice'); // Obtener el valor de data-choice
        playGame(jugadorEleccion);
    });
});