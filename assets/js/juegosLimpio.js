/*
2C = two of clubs-trebol
2D = two of diamonds-diamantes
2H = two of heats-corazones
2S = two of swords-espadas
*/

let deck = [];
const tipos      =  ['C','D','H','S'];
const especiales =  ['A','J','Q','K'];

let puntosjugador     = 0,
    puntosComputadora = 0;


// HMTL

const btnPedirCarta        = document.querySelector('#btnPedirCarta');
const btnNewGame           = document.querySelector('#btnNewGame');
const btnDetenerse         = document.querySelector('#btnDetenerse');
const puntosHTML           = document.querySelectorAll('small');
const divCartasJugador     = document.querySelector('#jugador-cartas'); 
const divCartasComputadora = document.querySelector('#computadora-cartas'); 



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

    deck = _.shuffle( deck );
    return deck; 
}

crearDeck();


const pedirCarta = ()=> {

    if ( deck.length === 0) {
        throw 'Sin cartas';
    }

    const carta = deck.pop(); 
    return carta;
}


const valorCarta = ( carta ) => {
 
    const valor = carta.substring( 0, carta.length -1 );

    return( isNaN( valor )) ? 
            ( valor === 'A') ? 11 : 10
            : valor * 1;
    
};

// Turno de la computadora 

const turnoComputadora = ( puntosMinimos  ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;


        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21) {
            break;
        }

    } while ( ( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

    setTimeout(() => {
        
        if ( puntosComputadora === puntosMinimos) {
            alert('Nadie Gana')
        } else if( puntosMinimos > 21){
            alert('La computadora Gana')
        } else if( puntosMinimos === 21){
            alert('Ganaste!')
        }else if( puntosComputadora > 21){
            alert('¡Ganaste!')
        }else{
            alert('conputadora Gana')
        }
        
    }, 200);
}

// Eventos

btnPedirCarta.addEventListener('click', () => {// Callback es una funcion que se manda como argumento para otra funcion

    const carta = pedirCarta();

    puntosjugador = puntosjugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosjugador;

    //<img class="carta" src="assets/cartas/10D.png" alt="">

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if ( puntosjugador > 21) {
        console.warn( 'Perdiste' );
        btnPedirCarta.disabled = true;
        btnDetenerse .disabled = true;
        turnoComputadora( puntosjugador );

    } else if( puntosjugador === 21 ){
        btnDetenerse.disabled = true;
        btnPedirCarta.disabled = true;
    }

})

btnDetenerse .addEventListener('click', ( ) => {
    btnPedirCarta.disabled = true;
    btnDetenerse.disabled = true;
    turnoComputadora( puntosjugador );
})

btnNewGame.addEventListener('click', ( ) => {

    console.clear();
    deck = [];
    deck = crearDeck();

    puntosjugador     = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML     = '';
    
    btnPedirCarta.disabled = false;
    btnDetenerse.disabled  = false;
})

