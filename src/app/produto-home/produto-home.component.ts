import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-home',
  templateUrl: './produto-home.component.html',
  styleUrls: ['./produto-home.component.css']
})
export class ProdutoHomeComponent implements OnInit {
  public produtos:Array<any> = [];

  ngOnInit(): void {
    this.produtos = JSON.parse(String(localStorage.getItem('produtos')));
  }
}
