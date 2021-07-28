import { Router } from '@angular/router';
import { Usuario } from './../usuarios/usuario';
import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

    if (usuario.nome === 'fe' && usuario.senha === 'fe') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
    }

  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

}
