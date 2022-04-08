
/*

2C = two of clubs-trebol
2D = two of diamonds-diamantes
2H = two of heats-corazones
2S = two of swords-espadas

*/

let deck = [];
const tipos =  [ 'C','D','H','S' ];
const especiales =  [ 'C','D','H','S' ];

const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ){
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }



    } 
    console.log( deck );
}

crearDeck();






