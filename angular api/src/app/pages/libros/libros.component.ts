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
    this.mostrarTodos()
  }

  mostrarTodos() {
    this.libroService.getAll().subscribe(res => {
      console.log("respuesta buscar todos los libros", res);
      this.libros = res;
    })
  }

  mostrarUno(idLibro: number): void {
    if (idLibro) {
      this.libroService.getOne(idLibro).subscribe(res => {
        this.libros = res;
      });
    } else {
      this.mostrarTodos()
    }
  }

  borrar(idLibro) {
    this.libroService.delete(idLibro).subscribe(res => {
      console.log('libro borrado con éxito', res);
      this.mostrarTodos();

    });

  }

}

