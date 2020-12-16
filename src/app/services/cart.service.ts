import { ProductService } from './product.service';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Array<number> = [];
  public addToCart: Subject<number>;
  public cartList: Subject<Array<number>>;

  constructor(private productService: ProductService) {
    this.addToCart = new Subject();
    this.cartList = new Subject();

    this.addToCart.subscribe(productID => {
      const prodID = this.cart.find(p => p === productID);
      if (!prodID) {
        this.cart.push(productID);
        this.cartList.next(this.cart);
      }
    });
  }

  public getCartPrducts(): Observable<Array<Product>> {
    const productsObservable = new Observable<Array<Product>>(observer => {
      this.productService.getProducts().subscribe(products => {
        const cartProds = products.filter(p => {
          return this.cart.find(pid => pid === p.id);
        });
        observer.next(cartProds);
      });
    });
    return productsObservable;
  }

  public removeProduct(id): boolean {
    const index = this.cart.findIndex(pid => pid === id);
    this.cart.splice(index, 1);
    this.cartList.next(this.cart);
    return true;
  }
}
