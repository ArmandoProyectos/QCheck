import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingCtrl, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.usuario = {
            user: '',
            pass: ''
        };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function (usuario) {
        var _this = this;
        if (usuario.user === 'usuario' && usuario.pass === '1234') {
            this.presentLoading('Espere...');
            setTimeout(function () {
                _this.loading.dismiss();
            }, 2000);
            this.router.navigate(['/admin']);
            // this.navCtrl.navigateForward('/admin');
        }
        else if (usuario.user === 'admin' && usuario.pass === '1234') {
            this.presentLoading('Espere...');
            setTimeout(function () {
                _this.loading.dismiss();
            }, 2000);
        }
    };
    LoginPage.prototype.presentLoading = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, role, data;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: message
                            })];
                    case 1:
                        _a.loading = _c.sent();
                        this.loading.present();
                        return [4 /*yield*/, this.loading.onDidDismiss()];
                    case 2:
                        _b = _c.sent(), role = _b.role, data = _b.data;
                        console.log('Loading dismissed!');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, LoadingController, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map