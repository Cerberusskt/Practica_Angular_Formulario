import { Component } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  constructor() { }
  ngOnInit():void {}
  ruc:string='99999999001';
  valor:number=0.0;;
  gasto:string='Ninguno';
  
  }
  let imprimir =[
    '99999999001',
    'Ninguno'
  ]
let json = JSON.stringify(imprimir, null, 4);
console.log(json);



