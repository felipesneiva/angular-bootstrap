import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule, Component, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule), canActivate: [AuthGuard]},
  {path:'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule), canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
