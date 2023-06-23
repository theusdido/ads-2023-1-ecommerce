import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { ProdutoService } from './service/produto.service';
import { FormsModule } from '@angular/forms';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoHomeComponent,
    ProdutoDetalheComponent,
    HomeComponent,
    CarrinhoComprasComponent,
    CadastroClienteComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
