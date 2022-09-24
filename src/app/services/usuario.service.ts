import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService {
  private recurso: string = 'user'
  private apiUrl: string = `https://632e3a582cfd5ccc2afda6a6.mockapi.io/api/${this.recurso}`;
  constructor(private http: HttpClient) {}

  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  obtenerUno(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  agregar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  modificar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario);
  }

  borrar(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
