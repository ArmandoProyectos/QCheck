"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bcrypt = require("bcrypt");
const usuarios_model_1 = require("../models/usuarios.model");
const token_1 = require("../classes/token");
const autenticacion_1 = require("../middlewares/autenticacion");
const userRoutes = express.Router();
// Login
userRoutes.post('/login', (req, res) => {
    const user = req.body;
    usuarios_model_1.Usuarios.findOne({ email: user.email }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Correo/Contraseña incorrecta'
            });
        }
        if (userDB.compararPassword(user.password)) {
            const tokenUser = token_1.default.getJwtToken({
                _id: userDB.id,
                name: userDB.name,
                lastname: userDB.lastname,
                rut: userDB.rut,
                email: userDB.email,
                phone: userDB.phone
            });
            res.json({
                ok: true,
                token: tokenUser
            });
        }
        else {
            return res.json({
                ok: false,
                token: 'Correo/Contraseña incorrecta ***'
            });
        }
    });
});
// Crear usuario
userRoutes.post('/create', (req, res) => {
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        rut: req.body.rut,
        email: req.body.email,
        phone: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 10)
    };
    usuarios_model_1.Usuarios.create(user).then(userDB => {
        const tokenUser = token_1.default.getJwtToken({
            _id: userDB.id,
            name: userDB.name,
            lastname: userDB.lastname,
            rut: userDB.rut,
            email: userDB.email,
            phone: userDB.phone
        });
        res.json({
            ok: true,
            token: tokenUser
        });
    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    });
});
// Actualizar usuario
userRoutes.post('/update', autenticacion_1.verificarToken, (req, res) => {
    const user = {
        name: req.body.name || req.usuario.name,
        lastname: req.body.lastname || req.usuario.lastname,
        rut: req.body.rut || req.usuario.rut,
        email: req.body.email || req.usuario.email,
        phone: req.body.phone || req.usuario.phone,
    };
    usuarios_model_1.Usuarios.findByIdAndUpdate(req.usuario._id, user, { new: true }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Usuario no existe'
            });
        }
        const tokenUser = token_1.default.getJwtToken({
            _id: userDB.id,
            name: userDB.name,
            lastname: userDB.lastname,
            rut: userDB.rut,
            email: userDB.email,
            phone: userDB.phone
        });
        res.json({
            ok: true,
            token: tokenUser
        });
    });
});
// Mostrar usuario
userRoutes.post('/view', (req, res) => {
    const user = req.body;
    usuarios_model_1.Usuarios.findOne({ email: user.email }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: 'Correo/Contraseña incorrecta'
            });
        }
        if (userDB.compararPassword(user.password)) {
            const tokenUser = token_1.default.getJwtToken({
                _id: userDB.id,
                name: userDB.name,
                lastname: userDB.lastname,
                rut: userDB.rut,
                email: userDB.email,
                phone: userDB.phone
            });
            res.json({
                ok: true,
                user: userDB
            });
        }
        else {
            return res.json({
                ok: false,
                token: 'Correo/Contraseña incorrecta ***'
            });
        }
    });
});
// Validar Token
userRoutes.get('/', [autenticacion_1.verificarToken], (req, res) => {
    const usuario = req.usuario;
    res.json({
        ok: true,
        usuario
    });
});
exports.default = userRoutes;
//# sourceMappingURL=usuarios.js.map