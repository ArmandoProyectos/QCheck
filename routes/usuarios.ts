import * as express from 'express';
import * as bcrypt from 'bcrypt';
import { Usuarios } from '../models/usuarios.model';
import Token from '../classes/token';
import { verificarToken } from '../middlewares/autenticacion';

const userRoutes = express.Router();

// Login
userRoutes.post('/login', (req: express.Request, res: express.Response) => {
    const user = req.body;

    Usuarios.findOne({ email: user.email }, ( err, userDB) => {
        if( err ) throw err;

        if( !userDB ){
            return res.json({
                ok      : false,
                mensaje : 'Correo/Contraseña incorrecta'
            });
        }

        if( userDB.compararPassword(user.password) ){
            const tokenUser = Token.getJwtToken({
                _id      : userDB.id,
                name   : userDB.name,
                lastname : userDB.lastname,
                rut      : userDB.rut,
                email   : userDB.email,
                phone : userDB.phone
            });

            res.json({
                ok    : true,
                token : tokenUser
            });
        } else{
            return res.json({
                ok    : false,
                token : 'Correo/Contraseña incorrecta ***'
            });
        }
    })
})

// Crear usuario
userRoutes.post('/create', (req: express.Request, res: express.Response) => {
    const user = {
        name     : req.body.name,
        lastname   : req.body.lastname,
        rut        : req.body.rut,
        email     : req.body.email,
        phone   : req.body.phone,
        password : bcrypt.hashSync(req.body.password, 10)
    };

    Usuarios.create(user).then( userDB => {
        const tokenUser = Token.getJwtToken({
            _id      : userDB.id,
            name   : userDB.name,
            lastname : userDB.lastname,
            rut      : userDB.rut,
            email   : userDB.email,
            phone : userDB.phone
        });

        res.json({
            ok    : true,
            token : tokenUser
        });
    }).catch( err => {
        res.json({
            ok  : false,
            err
        });
    });
})

// Actualizar usuario
userRoutes.post('/update', verificarToken, (req: any, res: express.Response) => {
    const user = {
        name     : req.body.name   || req.usuario.name,
        lastname   : req.body.lastname || req.usuario.lastname,
        rut        : req.body.rut      || req.usuario.rut,
        email     : req.body.email   || req.usuario.email,
        phone   : req.body.phone || req.usuario.phone,
    };
    
    Usuarios.findByIdAndUpdate( req.usuario._id, user, { new: true }, ( err, userDB ) => {
        if( err ) throw err;

        if( !userDB ){
            return res.json({
                ok      : false,
                mensaje : 'Usuario no existe'
            })
        }

        const tokenUser = Token.getJwtToken({
            _id      : userDB.id,
            name   : userDB.name,
            lastname : userDB.lastname,
            rut      : userDB.rut,
            email   : userDB.email,
            phone : userDB.phone
        });

        res.json({
            ok    : true,
            token : tokenUser
        });
    });
})

// Mostrar usuario
userRoutes.post('/view', (req: any, res: express.Response) => {
    const user = req.body;

    Usuarios.findOne({ email: user.email }, ( err, userDB) => {
        if( err ) throw err;

        if( !userDB ){
            return res.json({
                ok      : false,
                mensaje : 'Correo/Contraseña incorrecta'
            });
        }

        if (userDB.compararPassword(user.password) ){
            const tokenUser = Token.getJwtToken({
                _id      : userDB.id,
                name   : userDB.name,
                lastname : userDB.lastname,
                rut      : userDB.rut,
                email   : userDB.email,
                phone : userDB.phone
            });

            res.json({
                ok    : true,
                user: userDB
            });
        } else{
            return res.json({
                ok    : false,
                token : 'Correo/Contraseña incorrecta ***'
            });
        }
    })
})

// Validar Token
userRoutes.get('/', [verificarToken], ( req: any, res: express.Response ) => {
    const usuario = req.usuario;

    res.json({
        ok: true,
        usuario
    });
});

export default userRoutes;