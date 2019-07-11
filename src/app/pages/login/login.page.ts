import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from 'interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: any;

  nombre: string;

  usuario = {
    email: 'armando.ulloa.melita@gmail.com',
    password: '1234'
  }

  nuevoUsuario: Usuario = {
    name     : 'Manuel',
    lastname : 'Madrid',
    rut      : '123123',
    email    : 'manuel@gmail.com',
    phone    : '12312312341',
    password : 'zxc'
  }

  constructor(private navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private usuarioService: UsuarioService,
              private uiService: UiServiceService,
              private alertCtrl: AlertController) {
  }

  ngOnInit() {
  }

  async login(fLogin: NgForm){
    if( fLogin.invalid ){ return; }

    if (this.usuario.email === 'admin@gmail.com' && this.usuario.password === 'admin'){
      const valido = await this.usuarioService.login(this.usuario.email, this.usuario.password);

      if (valido) {
        this.presentLoading('Espere...');

        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.navigateRoot('/admin', { animated: true });
        }, 2000);
      } else {
        this.uiService.alertaInformativa('Correo y/o contraseña incorrectas');
      }
    } else{
      const valido = await this.usuarioService.login(this.usuario.email, this.usuario.password);

      if (valido) {
        this.presentLoading('Espere...');

        setTimeout(() => {
          this.loading.dismiss();
          this.navCtrl.navigateRoot('inicio/tabs/tab2' ,{ animated: true });
        }, 2000);
      } else {
        this.uiService.alertaInformativa('Correo y/o contraseña incorrectas');
      }
    }

    console.log(fLogin.valid);
    console.log(this.usuario);
  }

  async crearUsuario() {
    const alert = await this.alertCtrl.create({
      header: 'Registrarse',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Nombre',
          value: this.nuevoUsuario.name
        },
        {
          name: 'lastname',
          type: 'text',
          placeholder: 'Apellido',
          value: this.nuevoUsuario.lastname
        },
        {
          name: 'rut',
          type: 'text',
          placeholder: 'Rut: (Ej: 12345678-9)',
          value: this.nuevoUsuario.rut
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'Correo',
          value: this.nuevoUsuario.email
        },
        {
          name: 'phone',
          type: 'text',
          placeholder: 'Telefono (Ej: 87654321)',
          value: this.nuevoUsuario.phone
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'Contraseña',
          value: this.nuevoUsuario.password
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            if (data.name === '' || data.lastname === '' || data.rut === '' || data.email === '' || data.phone === '' || data.password === ''){
              this.nuevoUsuario.name     = data.name;
              this.nuevoUsuario.lastname = data.lastname;
              this.nuevoUsuario.rut      = data.rut;
              this.nuevoUsuario.email    = data.email;
              this.nuevoUsuario.phone    = data.phone;
              this.nuevoUsuario.password = data.password;

              this.presentLoading('Espere...');

              setTimeout(() => {
                this.loading.dismiss();
                this.uiService.crearUsuarioIncompleto('Faltan datos');
                this.crearUsuario();
                console.log('Faltan datos');
              }, 2000);
            } else{
              this.presentLoading('Espere...');

              setTimeout(() => {
                this.loading.dismiss();

                this.registro(data);
              }, 2000);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async registro(usuario){
    const valido = await this.usuarioService.create(usuario);

    if (valido) {
      this.uiService.crearUsuarioIncompleto('Registro exitoso');

      console.log(usuario);

      this.presentLoading('Espere...');

      setTimeout(() => {
        this.loading.dismiss();
        this.navCtrl.navigateRoot('inicio/tabs/tab2', { animated: true });
      }, 2000);
    } else {
      this.uiService.alertaInformativa('Algunos datos pertenecen a una cuenta existente');
    }
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    this.loading.present();

    const { role, data } = await this.loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
}
