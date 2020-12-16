import { Product } from './../../models/product.model';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Product;

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(product => {
      this.product$ = product;
      console.log(product);
    });
  }
}
