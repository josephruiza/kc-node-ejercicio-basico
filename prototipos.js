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