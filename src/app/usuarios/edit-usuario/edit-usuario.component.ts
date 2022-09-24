import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit, OnDestroy {

  @Input() usuario: Usuario;
  private subscription = new Subscription();
  constructor(private service: UsuarioService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.llenarForm();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  guardar(){
    this.subscription.add(
      this.service.modificar(this.usuario).subscribe({
        next: () => {alert("Éxito."); this.router.navigate(['list'])},
        error: (e) => {alert("Ocurrió un error al editar"); console.log(e)}
      })
    )
  }

  cancelar(){
    this.router.navigate(['list']);
  }

  cambioCheckbox(x: boolean){
    this.usuario.activo = x;
  }
  
  private llenarForm(){
    this.subscription.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const id = params['id'];
          this.service.obtenerUno(id).subscribe({
            next: (usu: Usuario) => {this.usuario = usu;},
            error: () => {alert("Error al obtener el usuario para editar")}
          })
        }
      })
    )
  }
}
