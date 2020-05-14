import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SettingsService } from 'src/app/service/service.index';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( public _AJUSTES: SettingsService ) { }


  ngOnInit() {

    this.colocarCheck();

  }

  cambiarColor( tema: string, link: any) {
     // tslint:disable-next-line: prefer-const
     this.aplicarCheck(link);
     // console.log(tema);
     this._AJUSTES.aplicarTema(tema);

   }

   aplicarCheck(link: any) {
    // tslint:disable-next-line: prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line: prefer-const
    for ( const ref of selectores ) {
    ref.classList.remove('working');
    }
    link.classList.add('working');
   }

   colocarCheck() {
    // tslint:disable-next-line: prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line: prefer-const
    let tema = this._AJUSTES.ajustes.tema;
    for ( const ref of selectores ) {
      if ( ref.getAttribute('data-theme') === tema ) {
        ref.classList.add('working');
        break;
      }
    }
   }


}
