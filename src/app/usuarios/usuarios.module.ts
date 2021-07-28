import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosDetalheComponent } from './usuarios-detalhe/usuarios-detalhe.component';
import { UsuariosNaoEncontradoComponent } from './usuarios-nao-encontrado/usuarios-nao-encontrado.component';
import { UsuariosRoutingModule } from './usuarios.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    SharedModule
  ],
  declarations: [
    UsuariosComponent,
    UsuariosFormComponent,
    UsuariosDetalheComponent,
    UsuariosNaoEncontradoComponent

  ],
  exports: [
  ],
  providers: [
    UsuariosService
  ]

})
export class UsuariosModule { }
