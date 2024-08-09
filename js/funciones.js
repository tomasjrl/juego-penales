

export function getComputadoraOpciones() {
    const opciones = ['Izquierda', 'Centro', 'Derecha'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}


export function condicionGanador(jugadorEleccion, ComputadoraEleccion, puntajes) {
    if (jugadorEleccion === ComputadoraEleccion) {
        return "¡Penal atajado!";
    } else {
        if (puntajes.pateadorTurno) {
            puntajes.jugadorPuntaje++;
        } else {
            puntajes.computadoraPuntaje++; 
        }
        return "¡GOL!"; 
    }
}