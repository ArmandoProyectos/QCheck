import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-usuario',
  templateUrl: './pop-usuario.component.html',
  styleUrls: ['./pop-usuario.component.scss'],
})
export class PopUsuarioComponent implements OnInit {

  constructor( private navCtrl: NavController, private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  cerrar() {
    this.popoverCtrl.dismiss({
    });
  }
}
