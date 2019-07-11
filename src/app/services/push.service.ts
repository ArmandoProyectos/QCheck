import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor( private oneSignal: OneSignal ) {

  }

  configuracionInicial() {
    this.oneSignal.startInit('d358c7df-47b3-490b-8f85-efbd160d4b5c', '488724254083');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
      // do something when notification is received
      console.log('Recibido', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
      // do something when a notification is opened
      console.log('Abierta', noti);
    });

    this.oneSignal.endInit();
  }
}
