
/**
 * Esta funcion crea la carta como un elemento en pantalla 
 * @param {String} carta carta seleccionada
 * @returns {HTMLImageElement} retorna la carta en pantalla
 */

export const crearCartaHTML = (carta) => {

    if ( !carta ) throw new Error('Carta es requerido');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}