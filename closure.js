/**
 * Created by gambit on 22/03/17.
 */
'use strict';

function creaPersona(name) {
    const surname= 'Gotera';
    return{
        fullname : function () {
            console.log(name + ' ' + surname);
            return name + ' ' + surname;
        }
    };

}

const pepe = creaPersona('Pepe');
setTimeout(pepe.fullname, 2000);