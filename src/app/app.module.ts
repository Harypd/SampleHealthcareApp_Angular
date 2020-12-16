import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrandsCarouselComponent } from './components/shared/brands-carousel/brands-carousel.component';

import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandsCarouselComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    SwiperModule,
    MatCardModule,
    MatToolbarModule,
    MatBadgeModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
