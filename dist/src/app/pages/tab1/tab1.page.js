"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const ngx_1 = require("@ionic-native/barcode-scanner/ngx");
const data_local_service_1 = require("src/app/services/data-local.service");
let Tab1Page = class Tab1Page {
    constructor(barcodeScanner, dataLocal) {
        this.barcodeScanner = barcodeScanner;
        this.dataLocal = dataLocal;
        this.swiperOpts = {
            allowSlidePrev: false,
            allowSlideNext: false
        };
    }
    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            if (!barcodeData.cancelled) {
                this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
            }
        }).catch(err => {
            console.log('Error', err);
            this.dataLocal.guardarRegistro('QRCode', 'https://www.google.com');
            this.dataLocal.guardarRegistro('QRCode', 'geo:-20.22080039978,-70.143096923828');
        });
    }
};
Tab1Page = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tab1',
        templateUrl: 'tab1.page.html',
        styleUrls: ['tab1.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ngx_1.BarcodeScanner, data_local_service_1.DataLocalService])
], Tab1Page);
exports.Tab1Page = Tab1Page;
//# sourceMappingURL=tab1.page.js.map