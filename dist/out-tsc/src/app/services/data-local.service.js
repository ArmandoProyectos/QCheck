import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
var DataLocalService = /** @class */ (function () {
    function DataLocalService(storage, navCtrl, inAppBrowser) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.guardado = [];
        this.storage.get('registros').then(function (registros) {
            _this.cargarStorage();
        });
    }
    DataLocalService.prototype.cargarStorage = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('registros')];
                    case 1:
                        _a.guardado = ((_b.sent()) || []);
                        return [2 /*return*/];
                }
            });
        });
    };
    DataLocalService.prototype.guardarRegistro = function (format, text) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var nuevoRegistro;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cargarStorage()];
                    case 1:
                        _a.sent();
                        nuevoRegistro = new Registro(format, text);
                        this.guardado.unshift(nuevoRegistro);
                        console.log(this.guardado);
                        this.storage.set('registros', this.guardado);
                        this.abriRegistro(nuevoRegistro);
                        return [2 /*return*/];
                }
            });
        });
    };
    DataLocalService.prototype.abriRegistro = function (registro) {
        this.navCtrl.navigateForward('/tabs/tab3');
        switch (registro.type) {
            case 'http':
                var browser = this.inAppBrowser.create(registro.text, '_system');
                break;
            case 'geo':
                this.navCtrl.navigateForward("/tabs/tab3/mapa/" + registro.text);
                break;
        }
    };
    DataLocalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, NavController, InAppBrowser])
    ], DataLocalService);
    return DataLocalService;
}());
export { DataLocalService };
//# sourceMappingURL=data-local.service.js.map