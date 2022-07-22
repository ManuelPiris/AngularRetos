import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private usuarioService: UsuarioService,
    private router : Router) { }

  ngOnInit(): void {
  }

  loguearse(email, pass) {

    if (email && pass) {
     // this.router.navigate(['/books']);
      
      this.usuarioService.login(email, pass).subscribe((res:any) => {

        if(res.error){
          console.log(res.message);
          
        } else {
          this.router.navigate(['/books']);
          //this.usuarioService.usuario = res;
          this.router.navigateByUrl('/books');
          this.usuarioService.logueado = true;
        }
        
      })

    } else {
      console.log('Inicio de sesión: Los datos no coinciden');
    }

  }

}
