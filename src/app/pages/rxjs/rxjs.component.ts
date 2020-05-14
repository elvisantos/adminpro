import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
 subscripcion: Subscription;
  constructor() {



    // retry
   this.subscripcion = this.regresarObervable().pipe(
        retry(1)
        )

    // los suscribe tienen 3 callback, a continuación el 1º quien recibe la información
    .subscribe (
       numero => console.log (' Subs', numero),
    // El segundo es un error
     error => console.error('Error en el obs', error),
     // El tercer callback no recibe parametro
     () => console.log('El observador termino')

    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscripcion.unsubscribe();
  }

  regresarObervable(): Observable<any> {
    // tslint:disable-next-line: prefer-const
    return new Observable<any> ( observer => {
      let contador = 0;
      // tslint:disable-next-line: prefer-const
      let intervalo = setInterval(() => {
        contador++;

        const salida = {
          valor: contador

        };

        observer.next( salida);
        /*if (contador === 10) {
          clearInterval(contador);
          observer.complete();

        }
        if (contador === 2) {
          // clearInterval(contador);
          observer.error(' Auxilio');
        }*/
      }, 1000 );
    }).pipe(
      map( resp =>  resp.valor),
      filter( ( valor, index ) => {
      //  console.log('Filter', valor, index);
      if (( valor % 2 ) === 1) {
        return true;
      // impar
      } else {
        // par
        return false;
      }

      })
    );





   // return obs; puedo retornar directamente en el inicio

  }







}
