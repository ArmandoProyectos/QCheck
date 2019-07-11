"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
let PopUsuarioComponent = class PopUsuarioComponent {
    constructor(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    ngOnInit() { }
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
    tslib_1.__metadata("design:paramtypes", [angular_1.NavController, angular_1.PopoverController])
], PopUsuarioComponent);
exports.PopUsuarioComponent = PopUsuarioComponent;
//# sourceMappingURL=pop-usuario.component.js.map