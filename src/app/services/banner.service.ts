import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../models/banner.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(private http: HttpClient) { }

  public getBanners(): Observable<Array<Banner>> {
    return this.http.get<Array<Banner>>('/assets/data/banner.data.json');
  }
}
