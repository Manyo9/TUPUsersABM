import { Component, Input, Output, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-baja-usuario',
  templateUrl: './baja-usuario.component.html',
  styleUrls: ['./baja-usuario.component.css']
})
export class BajaUsuarioComponent implements OnInit, OnDestroy {

  @Input() usuario: Usuario;
  @Output() onDelete = new EventEmitter();
  private subscription = new Subscription(); 
  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  borrar(): void {
    this.subscription.add(
      this.service.borrar(this.usuario.id).subscribe({
        next: () => {this.onDelete.emit(); alert("Borrado ok")},
        error: (e) => {alert("Ocurrió un error al eliminar"); console.log(e);}
      })
    )
  }
}
