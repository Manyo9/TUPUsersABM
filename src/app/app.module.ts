import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AltaUsuarioComponent } from './usuarios/alta-usuario/alta-usuario.component';
import { BajaUsuarioComponent } from './usuarios/baja-usuario/baja-usuario.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { ListaUsuarioComponent } from './usuarios/lista-usuario/lista-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    AltaUsuarioComponent,
    BajaUsuarioComponent,
    EditUsuarioComponent,
    ListaUsuarioComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ UsuarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
