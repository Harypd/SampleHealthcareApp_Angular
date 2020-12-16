import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
