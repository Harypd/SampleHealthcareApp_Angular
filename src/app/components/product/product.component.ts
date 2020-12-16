import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(prodID) {
    this.cartService.addToCart.next(prodID);
  }
}
