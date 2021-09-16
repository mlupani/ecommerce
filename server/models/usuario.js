
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    apellido: {
        type: String,
        required: [true, 'El apellido es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es obligatorio'],
        unique: true
    },
    pais: {
        type: String,
        required: [true, 'El pais es obligatorio'],
        unique: true
    },
    ciudad: {
        type: String,
        required: [true, 'La ciudad es obligatoria'],
        unique: true
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es obligatoria'],
        unique: true
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
});



UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario  } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema );
