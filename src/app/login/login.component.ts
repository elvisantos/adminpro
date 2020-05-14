import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UsuarioService } from "../service/service.index";
import { Usuario } from "../models/usuario.model";

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean = false;
  auth2:any;

  constructor(public router: Router, public _usuarioService: UsuarioService) {}

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email')|| '';
    if( this.email.length > 1 ){
      this.recuerdame = true;
    }
  }

  googleInit(){
    gapi.load('auth2', () => {
      this.auth2= gapi.auth2.init({
        client_id: '764264784040-a8bihut3eknigvjkeq4gv8k6p6gdlmik.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin(document.getElementById('btnGoogle'));

    });


  }


  attachSignin( element){

    this.auth2.attachClickHandler( element, {}, (googleUser) => {

      //let profile = googleUser.getBasicProfile(); de esta manera retorno el profile, a continuación se retornará el token

     let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token)
                          .subscribe(resp =>{
                            window.location.href = '#/dashboard'
                            //this.router.navigate(['/dashboard']);
                           // console.log(resp);

                          });

    });

  }


  ingresar(forma: NgForm) {
    //this.router.navigate(['/dashboard']);
    if (forma.invalid) {
      return;
    }
    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this._usuarioService
      .login(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']) );
       // console.log(resp); en el servicio se usa el return true para verificar que su funcionamiento es correcto y por este consolelog muestra el valor true, ahora aplicaremos que como su valor es coorrecto, entre al dashboard
  }

}
