"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const registro_model_1 = require("../models/registro.model");
const storage_1 = require("@ionic/storage");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/in-app-browser/ngx");
let DataLocalService = class DataLocalService {
    constructor(storage, navCtrl, inAppBrowser) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.guardado = [];
        this.storage.get('registros').then(registros => {
            this.cargarStorage();
        });
    }
    cargarStorage() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.guardado = ((yield this.storage.get('registros')) || []);
        });
    }
    guardarRegistro(format, text) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.cargarStorage();
            const nuevoRegistro = new registro_model_1.Registro(format, text);
            this.guardado.unshift(nuevoRegistro);
            console.log(this.guardado);
            this.storage.set('registros', this.guardado);
            this.abriRegistro(nuevoRegistro);
        });
    }
    abriRegistro(registro) {
        this.navCtrl.navigateForward('/tabs/tab3');
        switch (registro.type) {
            case 'http':
                const browser = this.inAppBrowser.create(registro.text, '_system');
                break;
            case 'geo':
                this.navCtrl.navigateForward(`inicio/tabs/tab3/mapa/${registro.text}`);
                break;
        }
    }
};
DataLocalService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [storage_1.Storage, angular_1.NavController, ngx_1.InAppBrowser])
], DataLocalService);
exports.DataLocalService = DataLocalService;
//# sourceMappingURL=data-local.service.js.map