import { crearCartaHTML, pedirCarta, valorCarta } from "./";


/**
 * Esta funcion se encarga de jugar el turno d ela computadora
 * @param {Number} puntosMinimos puntos minimos necesarios para que la computadora gane 
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas en pantalla
 * @param {Array<String>} deck array de strings con las cartas
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos es requerido');
    if ( !deck ) throw new Error('deck es requerido');
    if ( !puntosHTML ) throw new Error('puntosHTML es requerido');

    let puntosComputadora = 0;
    

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);

        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}