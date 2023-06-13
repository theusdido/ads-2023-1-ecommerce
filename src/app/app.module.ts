import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoHomeComponent,
    ProdutoDetalheComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
