"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
const usuario_service_1 = require("../../services/usuario.service");
const ui_service_service_1 = require("../../services/ui-service.service");
let LoginPage = class LoginPage {
    constructor(navCtrl, loadingCtrl, usuarioService, uiService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarioService = usuarioService;
        this.uiService = uiService;
        this.alertCtrl = alertCtrl;
        this.usuario = {
            email: 'armando.ulloa.melita@gmail.com',
            password: '1234'
        };
        this.nuevoUsuario = {
            name: 'Manuel',
            lastname: 'Madrid',
            rut: '123123',
            email: 'manuel@gmail.com',
            phone: '12312312341',
            password: 'zxc'
        };
    }
    ngOnInit() {
    }
    login(fLogin) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (fLogin.invalid) {
                return;
            }
            if (this.usuario.email === 'admin@gmail.com' && this.usuario.password === 'admin') {
                const valido = yield this.usuarioService.login(this.usuario.email, this.usuario.password);
                if (valido) {
                    this.presentLoading('Espere...');
                    setTimeout(() => {
                        this.loading.dismiss();
                        this.navCtrl.navigateRoot('/admin', { animated: true });
                    }, 2000);
                }
                else {
                    this.uiService.alertaInformativa('Correo y/o contraseña incorrectas');
                }
            }
            else {
                const valido = yield this.usuarioService.login(this.usuario.email, this.usuario.password);
                if (valido) {
                    this.presentLoading('Espere...');
                    setTimeout(() => {
                        this.loading.dismiss();
                        this.navCtrl.navigateRoot('inicio/tabs/tab2', { animated: true });
                    }, 2000);
                }
                else {
                    this.uiService.alertaInformativa('Correo y/o contraseña incorrectas');
                }
            }
            console.log(fLogin.valid);
            console.log(this.usuario);
        });
    }
    crearUsuario() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Registrarse',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Nombre',
                        value: this.nuevoUsuario.name
                    },
                    {
                        name: 'lastname',
                        type: 'text',
                        placeholder: 'Apellido',
                        value: this.nuevoUsuario.lastname
                    },
                    {
                        name: 'rut',
                        type: 'text',
                        placeholder: 'Rut: (Ej: 12345678-9)',
                        value: this.nuevoUsuario.rut
                    },
                    {
                        name: 'email',
                        type: 'text',
                        placeholder: 'Correo',
                        value: this.nuevoUsuario.email
                    },
                    {
                        name: 'phone',
                        type: 'text',
                        placeholder: 'Telefono (Ej: 87654321)',
                        value: this.nuevoUsuario.phone
                    },
                    {
                        name: 'password',
                        type: 'text',
                        placeholder: 'Contraseña',
                        value: this.nuevoUsuario.password
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Aceptar',
                        handler: (data) => {
                            if (data.name === '' || data.lastname === '' || data.rut === '' || data.email === '' || data.phone === '' || data.password === '') {
                                this.nuevoUsuario.name = data.name;
                                this.nuevoUsuario.lastname = data.lastname;
                                this.nuevoUsuario.rut = data.rut;
                                this.nuevoUsuario.email = data.email;
                                this.nuevoUsuario.phone = data.phone;
                                this.nuevoUsuario.password = data.password;
                                this.presentLoading('Espere...');
                                setTimeout(() => {
                                    this.loading.dismiss();
                                    this.uiService.crearUsuarioIncompleto('Faltan datos');
                                    this.crearUsuario();
                                    console.log('Faltan datos');
                                }, 2000);
                            }
                            else {
                                this.presentLoading('Espere...');
                                setTimeout(() => {
                                    this.loading.dismiss();
                                    this.registro(data);
                                }, 2000);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    registro(usuario) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const valido = yield this.usuarioService.create(usuario);
            if (valido) {
                this.uiService.crearUsuarioIncompleto('Registro exitoso');
                console.log(usuario);
                this.presentLoading('Espere...');
                setTimeout(() => {
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('inicio/tabs/tab2', { animated: true });
                }, 2000);
            }
            else {
                this.uiService.alertaInformativa('Algunos datos pertenecen a una cuenta existente');
            }
        });
    }
    presentLoading(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message
            });
            this.loading.present();
            const { role, data } = yield this.loading.onDidDismiss();
        });
    }
};
LoginPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.NavController,
        angular_1.LoadingController,
        usuario_service_1.UsuarioService,
        ui_service_service_1.UiServiceService,
        angular_1.AlertController])
], LoginPage);
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.page.js.map