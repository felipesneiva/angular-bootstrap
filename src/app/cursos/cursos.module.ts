import { CursosService } from './cursos.service';

import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosComponent } from './cursos.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule,
    SharedModule
  ],
  declarations: [
    CursosComponent,
    CursosFormComponent,
    CursoNaoEncontradoComponent
  ],
  exports: [
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
