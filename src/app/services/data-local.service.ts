import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardado: Registro[] = [];



  constructor( private storage: Storage, private navCtrl: NavController, private inAppBrowser: InAppBrowser ) {
    this.storage.get('registros').then(registros => {
      this.cargarStorage();
    })
  }

  async cargarStorage(){
    this.guardado = (await this.storage.get('registros') || []);
  }

 async guardarRegistro( format: string, text: string ){
    await this.cargarStorage();

    const  nuevoRegistro = new Registro(format, text);
    this.guardado.unshift(nuevoRegistro);

    console.log(this.guardado);
    this.storage.set('registros', this.guardado);

    this.abriRegistro(nuevoRegistro );
  }

  abriRegistro( registro: Registro ){
    this.navCtrl.navigateForward('/tabs/tab3');

    switch( registro.type ){
      case 'http':
        const browser = this.inAppBrowser.create(registro.text, '_system');
      break;

      case 'geo':
        this.navCtrl.navigateForward(`inicio/tabs/tab3/mapa/${ registro.text }`);
      break;
    }
  }
}
