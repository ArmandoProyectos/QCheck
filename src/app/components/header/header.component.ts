import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../popinfo/popinfo.component';
import { PopUsuarioComponent } from '../pop-usuario/pop-usuario.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() nombre: string;

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  async mostrarUsuario(evento) {
    const popover = await this.popoverCtrl.create({
      component: PopUsuarioComponent,
      event: evento,
      mode: 'ios'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();

    console.log(data);
  }

  async mostrarOpciones(evento) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,   
      event: evento,
      mode: 'ios'
    });

    await popover.present();

    const { data } = await popover.onDidDismiss();

    console.log(data);
  }
}
