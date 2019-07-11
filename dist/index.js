"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./classes/server");
const usuarios_1 = require("./routes/usuarios");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = new server_1.default();
const cors = require('cors');
// Middleware con Body Parser - Angular -> xwwform
server.app.use(cors());
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
// Rutas de la app
server.app.use('/user', usuarios_1.default);
// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/qcheck', {
    useNewUrlParser: true,
    useCreateIndex: true
}, (err) => {
    if (err)
        throw err;
    console.log("DB Online");
});
// Levantar express
server.start(() => {
    console.log('Servidor: ', server.port);
});
//# sourceMappingURL=index.js.map