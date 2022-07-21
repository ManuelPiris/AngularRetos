import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private libros: Libro[] = []

  constructor() { }

  getAll(): Libro[] {
    return this.libros;
  }

  getOne(id_libro: number): Libro[] {
    console.log(id_libro, this.libros.filter(libro => libro.id_libro === id_libro));
    
    return this.libros.filter(libro => libro.id_libro === id_libro);
  }

  add(libro: Libro): void {
    this.libros.push(libro);
  }

  edit(libro: Libro): boolean {
    let updated = false;
    for( let i = 0; i < this.libros.length; i++) {
      console.log(this.libros[i]);
      
      if(this.libros[i].id_libro == libro.id_libro){
        this.libros[i] = libro;
        updated = true;
      }
    }

    return updated;
  }

  delete(id_libro: number): boolean {
    let nOriginal = this.libros.length;
    this.libros = this.libros.filter(libro => libro.id_libro !== id_libro );    
    return nOriginal > this.libros.length;
  }
}
