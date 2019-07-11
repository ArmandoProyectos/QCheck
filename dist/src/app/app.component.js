"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const angular_1 = require("@ionic/angular");
const ngx_1 = require("@ionic-native/splash-screen/ngx");
const ngx_2 = require("@ionic-native/status-bar/ngx");
const push_service_1 = require("./services/push.service");
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, pushService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.pushService = pushService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.pushService.configuracionInicial();
        });
    }
};
AppComponent = tslib_1.__decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: 'app.component.html'
    }),
    tslib_1.__metadata("design:paramtypes", [angular_1.Platform,
        ngx_1.SplashScreen,
        ngx_2.StatusBar,
        push_service_1.PushService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map