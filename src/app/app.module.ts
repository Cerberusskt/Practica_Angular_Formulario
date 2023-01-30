import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './gasto.service';

imports: [HttpClientModule]
providers: [GastoService]


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReporteComponent } from './reporte/reporte.component';


const rutas: Route[] = [
  { path: 'menu', component: MenuComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'registro', component: FormularioComponent },
  { path: 'reporte', component: ReporteComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    FormularioComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [GastoService],
  bootstrap: [AppComponent]
})

export class AppModule { }

