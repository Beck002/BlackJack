
/*

2C = two of clubs-trebol
2D = two of diamonds-diamantes
2H = two of heats-corazones
2S = two of swords-espadas

*/

let deck = [];
const tipos =  [ 'C','D','H','S' ];
const especiales =  [ 'A','J','Q','H' ];


// Crear un deck

const crearDeck = () => {

    for( let i = 2; i <= 10; i++ ){
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    } 

    for( let tipo of tipos){
        for (const especial of especiales) {
            deck.push( especial + tipo)            
        }
    }

    // console.log( deck );

    deck = _.shuffle( deck );

    // console.log( deck );

}

crearDeck();


const pedirCarta = ()=> {

    if ( deck.length === 0) {
        throw 'Sin cartas'
    }

    const carta = deck.pop(); 
    return carta;

}

// for( let i = 0; i <= 100; i++ ){
//     pedirCarta();
// }

const valorCarta = ( carta ) => {
 
    const valor = carta.substring( 0, carta.length -1 );
    
    return( isNaN( valor )) ? 
            ( valor === A)? 11 : 10
            : valor * 1;
    
    
    
    // console.log({valor});
    // if( isNaN( valor )){

    //     puntos = ( valor === A) ? 11 : 10;

    //     // console.log('n');
    // }else{
    //     // console.log('!n');
    //     puntos = valor * 1;
    // }


};

const valor = valorCarta( pedirCarta() );
// console.log({ valor });













