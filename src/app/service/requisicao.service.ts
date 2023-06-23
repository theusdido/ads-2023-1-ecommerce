import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  constructor(
    public http_client:HttpClient
  ) { }

  get(_dados?:any){
    return this.http_client
    .get('http://localhost/e-commerce/cliente/add.php',{
      params:{
        dados:JSON.stringify(_dados)
      }
    });
  }
}
