import { Component } from '@angular/core';
import { SettingsService} from './service/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lab';

constructor( public _AJUSTES: SettingsService ) {


}



}
