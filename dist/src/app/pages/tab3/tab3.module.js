"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const angular_1 = require("@ionic/angular");
const router_1 = require("@angular/router");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const tab3_page_1 = require("./tab3.page");
const components_module_1 = require("../../components/components.module");
let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([{ path: '', component: tab3_page_1.Tab3Page }]),
            components_module_1.ComponentsModule
        ],
        declarations: [tab3_page_1.Tab3Page]
    })
], Tab3PageModule);
exports.Tab3PageModule = Tab3PageModule;
//# sourceMappingURL=tab3.module.js.map