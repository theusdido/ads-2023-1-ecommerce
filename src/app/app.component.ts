import { Component } from '@angular/core';
import { CarrinhoComprasService } from './service/carrinho-compras.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';

  constructor(
    public carrinho_service:CarrinhoComprasService
  ){

  }
  displayCarrinho(){
    console.log();
    this.carrinho_service.display = this.carrinho_service.display ? false : true;
  }
}
