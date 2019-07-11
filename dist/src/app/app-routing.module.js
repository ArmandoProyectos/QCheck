"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const usuario_guard_1 = require("./guards/usuario.guard");
const routes = [
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    {
        path: 'admin',
        loadChildren: './pages/admin/admin.module#AdminPageModule',
        canLoad: [usuario_guard_1.UsuarioGuard]
    },
    {
        path: 'inicio',
        loadChildren: './pages/tabs/tabs.module#TabsPageModule',
        canLoad: [usuario_guard_1.UsuarioGuard]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map