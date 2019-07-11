"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const angular_1 = require("@ionic/angular");
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const tabs_router_module_1 = require("./tabs.router.module");
const tabs_page_1 = require("./tabs.page");
// import { ComponentsModule } from '../../components/components.module';
// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab1/tab1.module#Tab1PageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab2',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab2/tab2.module#Tab2PageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab3',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab3/tab3.module#Tab3PageModule'
//           },
//           {
//             path: 'mapa/:geo',
//             loadChildren: '../mapa/mapa.module#MapaPageModule'
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/tab2',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'contact'
//   },
//   {
//     path: "",
//     component: TabsPage,
//     children: [
//       {
//         path: "account",
//         loadChildren: "../avatar/avatar.module#AvatarPageModule"
//       },
//       {
//         path: "contact",
//         loadChildren: "../list/list.module#ListPageModule"
//       },
//       {
//         path: "settings",
//         loadChildren:
//           "../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule"
//       }
//     ]
//   }
// ];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib_1.__decorate([
    core_1.NgModule({
        imports: [
            angular_1.IonicModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            tabs_router_module_1.TabsPageRoutingModule,
        ],
        declarations: [tabs_page_1.TabsPage]
    })
], TabsPageModule);
exports.TabsPageModule = TabsPageModule;
//# sourceMappingURL=tabs.module.js.map