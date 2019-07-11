"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const angular_1 = require("@ionic/angular");
const admin_page_1 = require("./admin.page");
const components_module_1 = require("src/app/components/components.module");
const routes = [
    {
        path: '',
        component: admin_page_1.AdminPage
    }
];
let AdminPageModule = class AdminPageModule {
};
AdminPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            router_1.RouterModule.forChild(routes),
            components_module_1.ComponentsModule
        ],
        declarations: [admin_page_1.AdminPage]
    })
], AdminPageModule);
exports.AdminPageModule = AdminPageModule;
//# sourceMappingURL=admin.module.js.map