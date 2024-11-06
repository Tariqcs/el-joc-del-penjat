//Diccionario del juego//

const LlistaParaules = ["latigo", "sandia", "pollo", "gas", "chocolate"]
//Lineas de la paraula oculta//
// Cream diferents Arrays//
let NumErrades = 0

let ArrayParaulaSecreta

const arrayparaulaguions = []

const LlistaDeLletres = []

//numero de aciertos//
let NumEncerts = 0


function Inicialitzar() {

    let posicion = Math.floor(Math.random() * LlistaParaules.length);

    //Triem una paraula del diccionari//
    ParaulaSecreta = LlistaParaules[posicion];

    //  Convertim la cadena en Array//
    ArrayParaulaSecreta = Array.from(ParaulaSecreta);




    //Crear una Array que surtin els guions amb l´ArayParaulaOculta//
    num_guions = ArrayParaulaSecreta.length;
    // coloquem els guions al recuadre blanc//
    for (let i = 0; i < num_guions; i++) {
        arrayparaulaguions[i] = '_';


    }
    for (let i = 0; i < num_guions; i++) {
        document.getElementById("paraula").innerHTML += `${arrayparaulaguions[i]} `;

    }

}
function Enviar() {

    dibuixar(NumErrades, NumEncerts);

    //Llegeix la lletra i l´enviam a la llista//
    let encert = false;

    let Lletra_escrita = document.getElementById("lletra").value;

    LlistaDeLletres.push(Lletra_escrita);

    //Enviam la lletra a la llista//
    document.getElementById("llista_lletres").innerHTML += `${Lletra_escrita} <br>`;

    //esborrem la letra del formulari//
    document.getElementById("formulario").reset();

    //Comprovar si la lletra esta ArrayParaulaSecreta// 


    for (let i = 0; i < ArrayParaulaSecreta.length; i++) {
        if (ArrayParaulaSecreta[i] == Lletra_escrita) {
            arrayparaulaguions[i] = Lletra_escrita;
            encert = true
            NumEncerts++

        }

    }
    if (!encert) {
        NumErrades++

    }
    document.getElementById("paraula").innerHTML = "";

    for (let i = 0; i < arrayparaulaguions.length; i++) {
        document.getElementById("paraula").innerHTML += `${arrayparaulaguions[i]}  `;


    }

}


function dibuixar(fallos, aciertos) {
    let foto = document.getElementById("imagen");

    switch (fallos) {

        case 0:

            foto.src = "./imagen/A0.png";
            break;

        case 1:

            foto.src = "./imagen/A1.png";
            break;

        case 2:

            foto.src = "./imagen/A2.png";
            break;

        case 3:
            foto.src = "./imagen/A3.png";
            break;

        case 4:

            foto.src = "./imagen/A4.png";
            break;

        case 5:

            foto.src = "./imagen/A5.png";

            break;

        default:
            foto.src = "./imagen/A6.png";
            if(foto.src = "imagen/A6.png"){alert("Has perdido")}
            break;

}


    }













