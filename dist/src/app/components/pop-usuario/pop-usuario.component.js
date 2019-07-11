"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
const usuario_service_1 = require("../../services/usuario.service");
let PopUsuarioComponent = class PopUsuarioComponent {
    constructor(navCtrl, popoverCtrl, usuarioService) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.usuarioService = usuarioService;
        this.usuario = {
            nombre: '',
            apellido: '',
            rut: '',
            correo: '',
            telefono: ''
        };
    }
    ngOnInit() {
        this.usuarioService.obtenerUsuario().subscribe(resp => {
            this.usuario.nombre = resp['usuario'].name;
            this.usuario.apellido = resp['usuario'].lastname;
            this.usuario.rut = resp['usuario'].rut;
            this.usuario.correo = resp['usuario'].email;
            this.usuario.telefono = resp['usuario'].phone;
        });
    }
    cerrar() {
        this.popoverCtrl.dismiss({});
    }
};
PopUsuarioComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-pop-usuario',
        templateUrl: './pop-usuario.component.html',
        styleUrls: ['./pop-usuario.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.NavController, angular_1.PopoverController, usuario_service_1.UsuarioService])
], PopUsuarioComponent);
exports.PopUsuarioComponent = PopUsuarioComponent;
//# sourceMappingURL=pop-usuario.component.js.map