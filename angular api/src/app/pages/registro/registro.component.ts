import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService,
    private router : Router) { }

  ngOnInit(): void {
  }

  registrarse(nombre, apellidos, email, url, pass, passRep){

    if(pass === passRep){
      let newUser = new Usuario(nombre, apellidos, email, url, pass );
    console.log(newUser);
    
    this.usuarioService.register(newUser).subscribe( res => {
      console.log('registrado', res);
      this.router.navigate(['/login']);
    })

    } else {
      console.log("Las contraseñas son diferentes");
      
    }
  
    
  }

}
