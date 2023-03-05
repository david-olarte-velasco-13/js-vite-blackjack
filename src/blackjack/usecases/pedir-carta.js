
/**
 * Esta función me permite tomar una carta del deck
 * @param {Array<String>} deck Recibe un arreglo con cartas
 * @returns {String} Ejemplo: '5C'
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}