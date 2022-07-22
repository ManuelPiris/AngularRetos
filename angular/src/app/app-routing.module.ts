import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"perfil", component:PerfilComponent},
  {path:"registro", component:RegistroComponent},
  {path:"libros", component:LibrosComponent}, 
  { path: '**',  component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
