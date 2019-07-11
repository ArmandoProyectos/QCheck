"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const storage_1 = require("@ionic/storage");
const environment_1 = require("../../environments/environment");
const angular_1 = require("@ionic/angular");
const URL = environment_1.environment.url;
let UsuarioService = class UsuarioService {
    constructor(http, storage, navCtrl) {
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.token = null;
        this.usuario = {
            name: '',
            lastname: '',
            rut: '',
            email: '',
            phone: '',
            password: ''
        };
    }
    login(email, password) {
        const data = { email, password };
        return new Promise(resolve => {
            this.http.post(URL + '/user/login', data).subscribe(resp => {
                if (resp['ok']) {
                    this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            });
        });
    }
    create(usuario) {
        return new Promise(resolve => {
            this.http.post(URL + '/user/create', usuario).subscribe(resp => {
                if (resp['ok']) {
                    this.guardarToken(resp['token']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            });
        });
    }
    guardarToken(token) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.token = token;
            yield this.storage.set('token', token);
        });
    }
    cargarToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.token = (yield this.storage.get('token')) || null;
        });
    }
    obtenerUsuario() {
        const headers = new http_1.HttpHeaders({
            'x-token': this.token
        });
        return this.http.get(URL + '/user/get', { headers });
    }
    validarToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/login');
                return Promise.resolve(false);
            }
            return new Promise(resolve => {
                const headers = new http_1.HttpHeaders({
                    'x-token': this.token
                });
                this.http.get(URL + '/user', { headers }).subscribe(resp => {
                    if (resp['ok']) {
                        this.usuario = resp['usuario'];
                        resolve(true);
                    }
                    else {
                        this.navCtrl.navigateRoot('/login');
                        resolve(false);
                    }
                });
            });
        });
    }
};
UsuarioService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [http_1.HttpClient, storage_1.Storage, angular_1.NavController])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map