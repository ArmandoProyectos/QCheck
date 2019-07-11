import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(dataLocal) {
        this.dataLocal = dataLocal;
    }
    Tab3Page.prototype.abrirRegistro = function (registro) {
        this.dataLocal.abriRegistro(registro);
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataLocalService])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map