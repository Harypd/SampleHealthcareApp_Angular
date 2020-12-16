import { Banner } from './../../models/banner.model';
import { BannerService } from './../../services/banner.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount: number;
  slides$: Array<Banner> = [];

  constructor(private cartService: CartService, private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.getBanners().subscribe(banners => {
      this.slides$ = banners;
    });

    this.cartService.cartList.subscribe(list => {
      this.cartCount = list.length;
    });
  }
}
