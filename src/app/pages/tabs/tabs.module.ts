import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
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

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    // ComponentsModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
