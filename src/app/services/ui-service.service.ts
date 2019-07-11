import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(public alertController: AlertController,
              public toastController: ToastController
     ) { }

  // async alertaInformativa( msg: string ) {
  //   const alert = await this.alertController.create({
  //     message: msg,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  async alertaInformativa(msg: string ) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async crearUsuarioIncompleto(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
