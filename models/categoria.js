
//Importar los metodos de mongoose que necesito para crear un modelo
const { Schema, model } = require('mongoose');

//definición de mi schema (propiedades o caracteristicas que tiene que completar el usuario para registrase)
const CategoriaSchema = Schema({

    //nombre de categoria que es de tipo String y lo tiene que llenar obligatoriamente
    nombre: { 
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    // Para saber cuando se borra o no, por defecto es true en su creación
    estado: {
        type: Boolean,
        default: true,
        required: true
    },

    // Para saber que usuario creo la categoria
    usuario: {
        //Quiere decir que es de otro tipo objeto (modelo) que tengo en mongo y necesito el id de ese objeto
        type: Schema.Types.ObjectId,
        //Como se llama el modelo de mi objeto que requiero, como lo ponga en models>usuario.js>module.exports 
        //asi lo pongo tal cual 
        ref: 'Usuario',
        required: true

    }

});


//Para determinar que quiero mostrar en postman o en consola del navegador web
CategoriaSchema.methods.toJSON =  function() {
    
    //Aca separo el __v y el estado del resto (categoria) y solo retorno lo que quiero que se vea de categoria
    const {__v, estado,...categoria} = this.toObject();

    return categoria;
}

//Esta exportación es diferente, se exporta como tal el metodo model ('nombre del objeto que estoy creando (la
// primera con mayucula)', 'esquema de propiedades de dicho objeto que definimos anteriormente')
module.exports = model( 'Categoria', CategoriaSchema );