import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Rutas
import { PAGES_ROUTES } from './pages.routes';


// ng2- charts
import {ChartsModule} from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

//Pipe module
import { PipesModule } from '../pipes/pipes.module';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';






@NgModule({
declarations: [
PagesComponent,
DashboardComponent,
ProgressComponent,
Graficas1Component,
IncrementadorComponent,
GraficoDonaComponent,
AccoutSettingsComponent,
PromesasComponent,
RxjsComponent,
ProfileComponent,
UsuariosComponent,
ModalUploadComponent


],
exports: [
  PagesComponent,
  DashboardComponent,
  ProgressComponent,
  Graficas1Component,
  IncrementadorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PAGES_ROUTES,
    ChartsModule,
    PipesModule
  ]
})

export class PagesModule { }
