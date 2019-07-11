"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
const popinfo_component_1 = require("../popinfo/popinfo.component");
const pop_usuario_component_1 = require("../pop-usuario/pop-usuario.component");
let HeaderComponent = class HeaderComponent {
    constructor(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
    mostrarUsuario(evento) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: pop_usuario_component_1.PopUsuarioComponent,
                event: evento,
                mode: 'ios'
            });
            yield popover.present();
            const { data } = yield popover.onDidDismiss();
            console.log(data);
        });
    }
    mostrarOpciones(evento) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: popinfo_component_1.PopinfoComponent,
                event: evento,
                mode: 'ios'
            });
            yield popover.present();
            const { data } = yield popover.onDidDismiss();
            console.log(data);
        });
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HeaderComponent.prototype, "titulo", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], HeaderComponent.prototype, "nombre", void 0);
HeaderComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.PopoverController])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map