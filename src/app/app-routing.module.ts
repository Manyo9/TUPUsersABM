import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AltaUsuarioComponent } from './usuarios/alta-usuario/alta-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'alta', component: AltaUsuarioComponent},
  {path: 'edit/:id', component: EditUsuarioComponent},
  {path: 'list', component: ListaUsuarioComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
