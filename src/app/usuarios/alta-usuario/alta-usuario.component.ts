import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;
  private subscription = new Subscription();
  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar(){
    this.subscription.add(
      this.service.agregar(this.usuario).subscribe({
        next: () => {alert("Éxito."); this.router.navigate(['list'])},
        error: (e) => {alert("Ocurrió un error."); console.log(e)}
      })
    )
  }

  cancelar(){
    this.router.navigate(['list']);
  }

  cambioCheckbox(x: boolean){
    this.usuario.activo = x;
  }
}
