"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const angular_1 = require("@ionic/angular");
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const tab1_page_1 = require("./tab1.page");
const components_module_1 = require("src/app/components/components.module");
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([{ path: '', component: tab1_page_1.Tab1Page }]),
            components_module_1.ComponentsModule
        ],
        declarations: [tab1_page_1.Tab1Page]
    })
], Tab1PageModule);
exports.Tab1PageModule = Tab1PageModule;
//# sourceMappingURL=tab1.module.js.map