import { Component } from '@angular/core';
import { CarrinhoComprasService } from '../service/carrinho-compras.service';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent {

  constructor(
    public carrinho_service:CarrinhoComprasService
  ){
  }
}
