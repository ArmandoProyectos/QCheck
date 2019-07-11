"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const usuario_service_1 = require("src/app/services/usuario.service");
let Tab2Page = class Tab2Page {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
    }
};
Tab2Page = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-tab2',
        templateUrl: 'tab2.page.html',
        styleUrls: ['tab2.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [usuario_service_1.UsuarioService])
], Tab2Page);
exports.Tab2Page = Tab2Page;
//# sourceMappingURL=tab2.page.js.map