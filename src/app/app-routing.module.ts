import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutoHomeComponent } from './produto-home/produto-home.component';
import { HomeComponent } from './home/home.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';

const routes:Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'produto/:id',
    component:ProdutoDetalheComponent
  },
  {
    path:'cadastro',
    component:CadastroClienteComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
