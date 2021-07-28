import { Injectable } from '@angular/core';

@Injectable()
export class UsuariosService {

  private usuarios: any[] = [
    {id: 1, nome: 'Usuario 1', email: 'usuario1@email.com'},
    {id: 2, nome: 'Usuario 2', email: 'usuario2@email.com'},
    {id: 3, nome: 'Usuario 3', email: 'usuario3@email.com'}
  ];

  getUsuarios(){
    return this.usuarios;
  }

  getUsuario(id: number){
    for (let i=0; i<this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if (usuario.id == id){
        return usuario;
      }
    }
    return null;
  }

constructor() { }



}
