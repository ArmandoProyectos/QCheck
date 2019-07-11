"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/splash-screen/ngx");
const ngx_2 = require("@ionic-native/status-bar/ngx");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const components_module_1 = require("./components/components.module");
const ngx_3 = require("@ionic-native/barcode-scanner/ngx");
const ngx_4 = require("@ionic-native/in-app-browser/ngx");
const storage_1 = require("@ionic/storage");
const ngx_5 = require("@ionic-native/onesignal/ngx");
const http_1 = require("@angular/common/http");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent],
        entryComponents: [],
        imports: [
            platform_browser_1.BrowserModule,
            angular_1.IonicModule.forRoot(),
            app_routing_module_1.AppRoutingModule,
            components_module_1.ComponentsModule,
            http_1.HttpClientModule,
            storage_1.IonicStorageModule.forRoot(),
        ],
        providers: [
            ngx_2.StatusBar,
            ngx_1.SplashScreen,
            ngx_3.BarcodeScanner,
            ngx_4.InAppBrowser,
            ngx_5.OneSignal,
            http_1.HttpClient,
            { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map