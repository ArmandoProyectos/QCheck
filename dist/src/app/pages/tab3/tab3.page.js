"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const data_local_service_1 = require("src/app/services/data-local.service");
let Tab3Page = class Tab3Page {
    constructor(dataLocal) {
        this.dataLocal = dataLocal;
    }
    abrirRegistro(registro) {
        this.dataLocal.abriRegistro(registro);
    }
};
Tab3Page = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tab3',
        templateUrl: 'tab3.page.html',
        styleUrls: ['tab3.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [data_local_service_1.DataLocalService])
], Tab3Page);
exports.Tab3Page = Tab3Page;
//# sourceMappingURL=tab3.page.js.map