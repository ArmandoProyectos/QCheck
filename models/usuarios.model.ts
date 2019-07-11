import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

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

usuarioSchema.method('compararPassword', function( password: string = ''): boolean{
    if( bcrypt.compareSync(password, this.password) ){
        return true;
    } else{
        return false;
    }
})

interface IUsuario extends mongoose.Document {
    name     : string;
    lastname   : string;
    rut        : string;
    email     : string;
    phone   : string;
    password : string;

    compararPassword(password: string): boolean;
}

export const Usuarios = mongoose.model<IUsuario>('Usuario', usuarioSchema);