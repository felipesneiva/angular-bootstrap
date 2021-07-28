import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosDetalheComponent } from './usuarios-detalhe/usuarios-detalhe.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosComponent } from './usuarios.component';

const usuariosRoutes: Routes = [
  {path:'', component: UsuariosComponent, children: [
    {path:'novo', component: UsuariosFormComponent},
    {path:':id', component: UsuariosDetalheComponent},
    {path:':id/editar', component: UsuariosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(usuariosRoutes)],
  exports: [RouterModule]
})

export class UsuariosRoutingModule { }
