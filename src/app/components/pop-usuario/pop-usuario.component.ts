import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-pop-usuario',
  templateUrl: './pop-usuario.component.html',
  styleUrls: ['./pop-usuario.component.scss'],
})
export class PopUsuarioComponent implements OnInit {

  usuario = {
    nombre   : '',
    apellido : '',
    rut      : '',
    correo   : '',
    telefono : ''
  }

  constructor(private navCtrl: NavController, private popoverCtrl: PopoverController, private usuarioService: UsuarioService ) { }

  ngOnInit() {
    this.usuarioService.obtenerUsuario().subscribe(resp => {
      this.usuario.nombre   = resp['usuario'].name;
      this.usuario.apellido = resp['usuario'].lastname;
      this.usuario.rut      = resp['usuario'].rut;
      this.usuario.correo   = resp['usuario'].email;
      this.usuario.telefono = resp['usuario'].phone;
    });
  }

  cerrar() {
    this.popoverCtrl.dismiss({
    });
  }
}
