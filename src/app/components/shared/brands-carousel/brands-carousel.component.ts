import { Banner } from './../../../models/banner.model';
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-brands-carousel',
  templateUrl: './brands-carousel.component.html',
  styleUrls: ['./brands-carousel.component.scss']
})
export class BrandsCarouselComponent implements OnInit, AfterViewInit {

  @Input() slides$: Array<Banner> = [];

  public config: SwiperConfigInterface = {};

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 600,
      effect: 'slide'
    };
  }
}
