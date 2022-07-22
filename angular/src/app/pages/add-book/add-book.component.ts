import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/shared/libro.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public libros: Libro[];

  constructor(private libroService: LibroService) { }

  ngOnInit( ): void {
  }

  addBook(idLibro, idUsuario, titulo, autor, tapa, precio, urlFoto) : void{
    let newBook = new Libro(titulo, autor, tapa, precio, urlFoto,idLibro, idUsuario)
    this.libroService.add(newBook).subscribe ( res=>
      console.log(res)
      
    )   
  }

}
