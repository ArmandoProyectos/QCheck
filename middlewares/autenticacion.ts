import * as express from 'express';
import Token from '../classes/token';
import { json } from 'body-parser';

export const verificarToken = (req: any, res: express.Response, next: express.NextFunction) => {
    const userToken = req.get('x-token') || '';

    Token.comprobarToken( userToken )
        .then( (decoded: any) => {
             console.log("Decoded: ", decoded);
             req.usuario = decoded.usuario;
             next();
        }).catch( err => {
            res.json({
                ok: false,
                mensaje: 'Token incorrecto'
            });
        });
}