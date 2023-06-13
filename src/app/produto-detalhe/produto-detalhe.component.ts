import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit{
  public produto:any;
  constructor(
    public activated_route:ActivatedRoute,
    public produto_service:ProdutoService
  ){}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(){
    this.activated_route.params
    .subscribe((_params:any) => {
      this.produto = this.produto_service.get(_params.id)
    })
  }
}
