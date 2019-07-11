import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  constructor(private popoverCtrl: PopoverController, private navCtrl: NavController) { }

  ngOnInit() {

  }

  cerrar() {
    this.popoverCtrl.dismiss({
    });

    this.navCtrl.navigateRoot('/login', { animated: true });
  }

}
