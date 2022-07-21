import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/shared/libro.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})


export class LibrosComponent implements OnInit {


  public libros: Libro[] = [];

  constructor(private libroService: LibroService) { }

  ngOnInit(): void {
    this.libros = this.libroService.getAll();
  }

  buscar(idLibro: number): void {
    if (idLibro) {
      this.libros = this.libroService.getOne(idLibro);
    } else {
      this.libros = this.libros = this.libroService.getAll();
    }
  }

 borrar(idLibro): void {
  this.libroService.delete(idLibro);
  this.buscar(idLibro);
 }

}

