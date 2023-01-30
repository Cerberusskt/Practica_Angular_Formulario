import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Gasto } from './Gasto';
import { User } from './User';

const configUrl='assets/datos.json';


@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
    }

    obtenerDatos(){
      return this.httpclient.get<Gasto[]>(configUrl);
      } 
    obtenerDatosUP(){
        return this.httpclient.get<User[]>('https://jsonplaceholder.typicode.com/users');
        } 
}
