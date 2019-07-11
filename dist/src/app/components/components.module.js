"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const header_component_1 = require("./header/header.component");
const angular_1 = require("@ionic/angular");
const popinfo_component_1 = require("./popinfo/popinfo.component");
const pop_usuario_component_1 = require("./pop-usuario/pop-usuario.component");
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib_1.__decorate([
    core_1.NgModule({
        entryComponents: [
            popinfo_component_1.PopinfoComponent,
            pop_usuario_component_1.PopUsuarioComponent
        ],
        declarations: [
            header_component_1.HeaderComponent,
            popinfo_component_1.PopinfoComponent,
            pop_usuario_component_1.PopUsuarioComponent
        ],
        exports: [
            header_component_1.HeaderComponent,
            popinfo_component_1.PopinfoComponent,
            pop_usuario_component_1.PopUsuarioComponent
        ],
        imports: [
            common_1.CommonModule,
            angular_1.IonicModule
        ]
    })
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map