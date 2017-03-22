/**
 * Created by gambit on 22/03/17.
 */
"use strict";

const persona = {
    name: 'Luis',
    surname: 'Gomez',
    fullname: function () {
        console.log(this.name + ' ' + this.surname);
    }
};

//si lo pasamos asi, persona no esta en el contexto de la llamada
setTimeout(persona.fullname, 1000);

//si lo pasamos asi, 'ligamos' persona a la función
setTimeout(persona.fullname.bind(persona), 1000);
