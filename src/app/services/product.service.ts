import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('assets/data/products.data.json');
  }

  public getProduct(id: number): Observable<Product> {
    const productObservable = new Observable<Product>(observer => {
      this.http.get<Array<Product>>('assets/data/products.data.json').subscribe(data => {
        let product = null;
        if (data && data.length) {
          product = data.find(p => p.id === id);
        }
        observer.next(product);
      });
    });
    return productObservable;
  }
}
