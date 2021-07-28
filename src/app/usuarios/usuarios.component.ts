import { UsuariosService } from './usuarios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  public usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuarios = this.usuariosService.getUsuarios();
  }

}
