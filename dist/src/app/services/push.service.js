"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ngx_1 = require("@ionic-native/onesignal/ngx");
let PushService = class PushService {
    constructor(oneSignal) {
        this.oneSignal = oneSignal;
    }
    configuracionInicial() {
        this.oneSignal.startInit('d358c7df-47b3-490b-8f85-efbd160d4b5c', '488724254083');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            // do something when notification is received
            console.log('Recibido', noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe((noti) => {
            // do something when a notification is opened
            console.log('Abierta', noti);
        });
        this.oneSignal.endInit();
    }
};
PushService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [ngx_1.OneSignal])
], PushService);
exports.PushService = PushService;
//# sourceMappingURL=push.service.js.map