import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
var PushService = /** @class */ (function () {
    function PushService(oneSignal) {
        this.oneSignal = oneSignal;
    }
    PushService.prototype.configuracionInicial = function () {
        this.oneSignal.startInit('d358c7df-47b3-490b-8f85-efbd160d4b5c', '488724254083');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        this.oneSignal.handleNotificationReceived().subscribe(function (noti) {
            // do something when notification is received
            console.log('Recibido', noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe(function (noti) {
            // do something when a notification is opened
            console.log('Abierta', noti);
        });
        this.oneSignal.endInit();
    };
    PushService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [OneSignal])
    ], PushService);
    return PushService;
}());
export { PushService };
//# sourceMappingURL=push.service.js.map