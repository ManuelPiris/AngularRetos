import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibroService } from 'src/app/shared/libro.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {


  constructor(private libroService: LibroService) { }
  
  ngOnInit(): void {
  }

  updateBook(a, b, c, d, e, f, g): void {
    this.libroService.edit(new Libro(c, d, e, f, g, a, b,)).subscribe (
      res => console.log("Libro modificado")
    )
  }
}
