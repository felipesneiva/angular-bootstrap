import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosComponent } from './cursos.component';
import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const cursosRoutes: Routes = [
  {path:'', component: CursosComponent, children: [
    {path:'novo', component: CursosFormComponent},
    {path:':id/editar', component: CursosFormComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})

export class CursosRoutingModule { }
