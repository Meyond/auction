import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Code404Component } from './code404/code404.component';
import { BindComponent } from './bind/bind.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:prodTitle', component: ProductDetailComponent },
  { path: 'demo', component: BindComponent },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
