import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent implements OnInit {
  public produtos:Array<any> = [];

  constructor(
    public router:Router,
    public produto_service:ProdutoService
  ){

  }
  ngOnInit(): void {
    this.produtos = this.produto_service.getAll();
  }

}