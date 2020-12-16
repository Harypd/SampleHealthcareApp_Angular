import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Array<Product> = [];
  products: Array<Product> = [];
  filteredProducts: Array<Product> = [];
  brands$: any;
  minPrice: number;
  maxPrice: number;

  value = '';
  bnds: any;

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + '$';
    }

    return value;
  }

  constructor(private productService: ProductService) {
    this.bnds = {};
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products$ = products;
      this.products = products;
      this.filteredProducts = products;

      const brands = {};
      this.products.forEach(p => {
        if (brands[p.brand]) {
          brands[p.brand]++;
        } else {
          brands[p.brand] = 1;
        }
      });
      this.brands$ = Object.entries(brands);

      this.minPrice = Math.min(...this.products.map(p => Number(p.price)));
      this.maxPrice = Math.max(...this.products.map(p => Number(p.price)));
    });
  }

  // Title FILTER
  applyFilter(filterValue: string) {
    filterValue = filterValue.toLocaleLowerCase();
    this.products$ = this.products.filter(product => (product.title.toLocaleLowerCase().indexOf(filterValue) > -1));
  }

  clearInput() {
    this.value = '';
    this.products$ = this.products;
  }

  // Brand Filter
  onChange(event, brand) {
    this.bnds[brand] = event.checked;

    if (!this.products$.length) {
      this.filteredProducts = [...this.products];
    }

     this.products$ = this.filteredProducts.filter(product => {
       let flag = false;
       for (const bnd of Object.keys(this.bnds)) {
         console.log('bnd: => ' + bnd + ' = > ' + this.bnds[bnd]);
        if (this.bnds[bnd] && product.brand === bnd) {
          flag = true;
        }
       }
       return flag;
      });

      if (!this.products$.length)
        this.products$ = [...this.filteredProducts];
  }

  onSlider(event) {
    this.products$ = this.products.filter(product => product.price <= event.value);
  }
}
