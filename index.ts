import Server from './classes/server';
import userRoutes from './routes/usuarios';

import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

const server = new Server();
const cors = require('cors');

// Middleware con Body Parser - Angular -> xwwform
server.app.use(cors());
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );


// Rutas de la app
server.app.use('/user', userRoutes);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/qcheck', {
    useNewUrlParser: true,
    useCreateIndex: true
}, ( err ) => {
    if( err ) throw err;

    console.log("DB Online");
});

// Levantar express
server.start( () => {
    console.log('Servidor: ', server.port);
} );