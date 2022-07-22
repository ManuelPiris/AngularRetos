import { Component, OnInit } from '@angular/core';
import {Libro} from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})


export class LibrosComponent implements OnInit {


  public libros: Libro[];

  constructor() { }

  ngOnInit(): void {
    this.libros = [];
  }


  enviar(a,b,c,d,e,f,g){

    this.libros.push(new Libro(c,d,e,f,g,a,b,))
    console.log(a,b,c,d,e,f,g);
  }

}