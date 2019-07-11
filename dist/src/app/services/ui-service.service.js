"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
let UiServiceService = class UiServiceService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
    }
    // async alertaInformativa( msg: string ) {
    //   const alert = await this.alertController.create({
    //     message: msg,
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    // }
    alertaInformativa(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    crearUsuarioIncompleto(msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
};
UiServiceService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.AlertController,
        angular_1.ToastController])
], UiServiceService);
exports.UiServiceService = UiServiceService;
//# sourceMappingURL=ui-service.service.js.map