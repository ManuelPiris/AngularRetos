import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:3000'
  public logueado: boolean = false;
  public usuario: Usuario;

  constructor(private http: HttpClient) { }

  register(user: Usuario) {
    return this.http.post(`${this.url}/registro`, user)
  }

  login(correo, password) {
    return this.http.post<Usuario>(`${this.url}/login`, {"correo": correo, "password": password})
  }

}
