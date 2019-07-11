"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const usuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name obligatorio']
    },
    lastname: {
        type: String,
        required: [true, 'lastname obligatorio']
    },
    rut: {
        type: String,
        unique: true,
        required: [true, 'Rut obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'email obligatorio']
    },
    phone: {
        type: Number,
        unique: true,
        required: [true, 'phone obligatorio']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'Contraseña obligatorio']
    }
});
usuarioSchema.method('compararPassword', function (password = '') {
    if (bcrypt.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
exports.Usuarios = mongoose.model('Usuario', usuarioSchema);
//# sourceMappingURL=usuarios.model.js.map