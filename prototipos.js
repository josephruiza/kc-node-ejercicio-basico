/**
 * Created by gambit on 22/03/17.
 */

"use strict";

function Persona(name) {
    this.name = name;

}

const persona = new Persona('Jos');

Persona.prototype.saluda = function () {
    console.log('hola, me llamo ' + this.name);
}

persona.saluda();

// --------------Heredando de persona---------------------- //

function Agente(name) {
    this.colorTraje = 'negro';
    Persona.call(this, name);
    //esto ejecuta el constructor de Persona con el this de Agente
}

Agente.prototype = new Persona('soy un prototipo');

const smith = new Agente('Smith');

smith.saluda();

console.log(
    Object.getPrototypeOf(smith),
    smith instanceof Persona,
    smith instanceof Agente,
    smith instanceof Object
);