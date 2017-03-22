/**
 * Created by gambit on 22/03/17.
 */
"use strict";

// Hacer una función que reciba un texto y tras 2 segundos lo escriba en la consola.

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000)
}

//llamar a una función n veces en serie
// y al terminar llamar a un callback final
function serieArray(arr, funcionALlamar, callbackFin){
    if(arr.length==0){
        callbackFin();
        return;
    }
    var elemento = arr.pop;
    funcionALlamar('texto'+ elemento, function () {
        serieArray(serieArray,funcionALlamar, callbackFin);
    });
}

serieArray([5,4,3,2,1], escribeTras2Segundos, function () {
   console.log("fin");
});