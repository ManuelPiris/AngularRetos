import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private url = 'http://localhost:3000'
  private libros: Libro[] = []

  constructor(private http: HttpClient) { }

  getAll() {
    //return this.libros;
    return this.http.get<Libro[]>(`${this.url}/libros`);
  }

  getOne(id_libro: number): any  {
    console.log(id_libro, this.libros.filter(libro => libro.id_libro === id_libro));
    return this.http.get(`${this.url}/libros/${id_libro}`);
    //return this.libros.filter(libro => libro.id_libro === id_libro);
  }

  add(libro: Libro) {
    return this.http.post(`${this.url}/libros`, libro);
    //this.libros.push(libro);
  }

  edit(libro: Libro) {
    return this.http.put(`${this.url}/libros`, libro)
  }
  // edit(libro: Libro): boolean {
  //   let updated = false;
  //   for( let i = 0; i < this.libros.length; i++) {
  //     console.log(this.libros[i]);
      
  //     if(this.libros[i].id_libro == libro.id_libro){
  //       this.libros[i] = libro;
  //       updated = true;
  //     }
  //   }

  //   return updated;
  // }

  delete(id_libro: number) {
    // let params = new HttpParams();
    // params = params.append('params',  id_libro);
    return this.http.delete(`${this.url}/libros/${id_libro}`)
  }
  // delete(id_libro: number): boolean {
  //   let nOriginal = this.libros.length;
  //   this.libros = this.libros.filter(libro => libro.id_libro !== id_libro );    
  //   return nOriginal > this.libros.length;
  // }
}
