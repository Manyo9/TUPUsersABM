import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit, OnDestroy {
  listado : Usuario[];
  private subscription = new Subscription();

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.traerListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  traerListado(): void{
    this.subscription.add(
      this.service.obtenerTodos().subscribe({
        next: (usuarios: Usuario[]) => {this.listado = usuarios},
        error: (e) => {alert("Error al cargar usuarios"); console.log(e);}
      })
    );
  }

  modificarUsuario(id: number): void{
    this.router.navigate(['edit',id]);
  }
}
