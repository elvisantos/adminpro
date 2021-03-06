import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import  swal from 'sweetalert';
import { UsuarioService } from '../service/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';


declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})

export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router


  ) { }

  sonIguales( campo1: string, campo2: string ){

    return ( group: FormGroup) =>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if(pass1 === pass2 ){
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }



  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required), //validaciones, colocamos parametros. En este caso la validación consiste en que sera un campo requerido
      correo: new FormControl(null, [Validators.required,Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false),
    },{ validators: this.sonIguales('password', 'password2' )        });

   /*  this.forma.setValue({  // relleno automatico, para probar formulario
      nombre: 'test',
      correo:'test@test.com',
      password: '123',
      password2: '123'
    });
    */
  }

  registrarUsuario(){

    if( this.forma.invalid){ // si son invalidas
      return;
    }

    if( !this.forma.value.condiciones){

      swal('Importante', 'Debe de aceptar las condiciones', 'warning');


      return;
    }
    // console.log(this.forma.value); retorna mensaje en consola para indicar que es valido el formulario

    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.correo,
      this.forma.value.password
    );

    this._usuarioService.crearUsuario( usuario )
            .subscribe( resp => {

              this.router.navigate(['/login']);


            });

  }


}
