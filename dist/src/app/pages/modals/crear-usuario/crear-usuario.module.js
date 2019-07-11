"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const angular_1 = require("@ionic/angular");
const crear_usuario_page_1 = require("./crear-usuario.page");
let CrearUsuarioPageModule = class CrearUsuarioPageModule {
};
CrearUsuarioPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule
        ],
        declarations: [crear_usuario_page_1.CrearUsuarioPage]
    })
], CrearUsuarioPageModule);
exports.CrearUsuarioPageModule = CrearUsuarioPageModule;
//# sourceMappingURL=crear-usuario.module.js.map