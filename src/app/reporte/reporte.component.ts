import { Component } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../Gasto';
import {User} from '../User';
 

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  gastos:Gasto[]=[];
  user:User[]=[];
  constructor(private gastoService:GastoService) {
    this.gastoService.obtenerDatos().subscribe(data =>
    {
    console.log(data);
    this.gastos=data;
    });
    
    this.gastoService.obtenerDatosUP().subscribe(data =>{
      console.log(data);
      this.user=data;
    }   
  );
  }
}
