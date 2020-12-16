import { Subject } from 'rxjs';
import { Product } from './../../models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

export interface CartProduct extends Product {
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products$: Array<CartProduct> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this._getCartProducts();
  }

  public removeFromCart(id) {
    console.log(id);
    this.cartService.removeProduct(id);
    this._getCartProducts();
  }

  public toNumber(str) {
    return Number(str);
  }

  public calculateTotal(products: Array<CartProduct>) {
    let total = 0;
    products.forEach(p => {
      total += Number(p.price) * p.quantity;
    });
    return total;
  }

  _getCartProducts() {
    this.cartService.getCartPrducts().subscribe(products => {
      this.products$ = products.map(p => {
        p.image = location.origin + '/' + p.image;
        return p as CartProduct;
      });

      this.products$ = this.products$.map(p => {
        p.quantity = 2;
        return p;
      });
    });
  }
}
