"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
let PopinfoComponent = class PopinfoComponent {
    constructor(popoverCtrl, navCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    cerrar() {
        this.popoverCtrl.dismiss({});
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
};
PopinfoComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-popinfo',
        templateUrl: './popinfo.component.html',
        styleUrls: ['./popinfo.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.PopoverController, angular_1.NavController])
], PopinfoComponent);
exports.PopinfoComponent = PopinfoComponent;
//# sourceMappingURL=popinfo.component.js.map