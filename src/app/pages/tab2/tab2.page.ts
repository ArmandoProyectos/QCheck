import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  usuario: Usuario = {
    name     : '',
    lastname : '',
    rut      : '',
    email    : '',
    phone    : '',
    password : ''
  };

  constructor(private usuarioService: UsuarioService ) {}

  ngOnInit() {
    this.obtenerUsuario();
  }

  obtenerUsuario(): any{
    this.usuario = this.usuarioService.obtenerUsuario();
    console.log(this.usuario);
  }
}
