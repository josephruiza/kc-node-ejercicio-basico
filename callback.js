/**
 * Created by gambit on 22/03/17.
 */
function suma(a, b, callback){
    var dato = a+b;
    callback(dato)
}

suma(4,6, function (resultado) {
    console.log(resultado);
})
