import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component'

const routes: Routes = [

  {path:"home", component:HomeComponent},
  {path:"add-book", component:AddBookComponent},
  {path:"update-book", component:UpdateBookComponent},
  {path:"books", component: LibrosComponent},
  {path:"perfil", component:PerfilComponent},
  {path:"registro", component:RegistroComponent},
  { path: '**',  component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
