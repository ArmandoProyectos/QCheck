import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { PopUsuarioComponent } from './pop-usuario/pop-usuario.component';

@NgModule({
  entryComponents: [
    PopinfoComponent,
    PopUsuarioComponent
  ],
  declarations: [
    HeaderComponent,
    PopinfoComponent,
    PopUsuarioComponent
  ],
  exports: [
    HeaderComponent,
    PopinfoComponent,
    PopUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
