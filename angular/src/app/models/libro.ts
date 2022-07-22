import { NumberSymbol } from "@angular/common";

export class Libro {

    public id_libro: number = 0;
    public id_usuario: number = 0;
    public titulo: string;
    public tipo: string;
    public autor: string;
    public precio: number;
    public foto: string;

 
    constructor(titulo: string, autor: string, tipoLibro: string, precio: number, photo: string, id_libro?: number, id_usuario?: number,) {

        if (id_libro) {
            this.id_libro = id_libro;
        }
        if (id_usuario) {
            this.id_usuario = id_usuario;
        }
        this.titulo = titulo;
        this.tipo = tipoLibro;
        this.autor = autor;
        this.precio = precio;
        this.foto = photo
    }
}

