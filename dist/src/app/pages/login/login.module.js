"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const angular_1 = require("@ionic/angular");
const login_page_1 = require("./login.page");
const routes = [
    {
        path: '',
        component: login_page_1.LoginPage
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            angular_1.IonicModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [login_page_1.LoginPage]
    })
], LoginPageModule);
exports.LoginPageModule = LoginPageModule;
//# sourceMappingURL=login.module.js.map