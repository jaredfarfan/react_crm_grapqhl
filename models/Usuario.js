const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String, //es el tipo de datos
        require: true,//dice que es obligatorio
        trim: true // elimina los espacio el blanco automaticamente
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true//si ya esta registrado no podra tener dos cuentas
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);