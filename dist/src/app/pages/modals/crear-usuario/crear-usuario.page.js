"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
let CrearUsuarioPage = class CrearUsuarioPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    volver() {
        this.modalCtrl.dismiss();
    }
};
CrearUsuarioPage = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-crear-usuario',
        templateUrl: './crear-usuario.page.html',
        styleUrls: ['./crear-usuario.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.ModalController])
], CrearUsuarioPage);
exports.CrearUsuarioPage = CrearUsuarioPage;
//# sourceMappingURL=crear-usuario.page.js.map