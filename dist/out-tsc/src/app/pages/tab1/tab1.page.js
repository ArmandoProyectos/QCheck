import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(barcodeScanner, dataLocal) {
        this.barcodeScanner = barcodeScanner;
        this.dataLocal = dataLocal;
        this.swiperOpts = {
            allowSlidePrev: false,
            allowSlideNext: false
        };
    }
    Tab1Page.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            if (!barcodeData.cancelled) {
                _this.dataLocal.guardarRegistro(barcodeData.format, barcodeData.text);
            }
        }).catch(function (err) {
            console.log('Error', err);
            _this.dataLocal.guardarRegistro('QRCode', 'https://www.google.com');
            _this.dataLocal.guardarRegistro('QRCode', 'geo:-20.22080039978,-70.143096923828');
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [BarcodeScanner, DataLocalService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map