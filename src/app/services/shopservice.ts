import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root',
})
export class Shopservice {
  baseurl = 'https://localhost:7296/api/'
  private http = inject(HttpClient)
  type:string[] = []
  brand:string[] = []

  getProduct(){
   return this.http.get<Pagination<Product>>(this.baseurl + 'product?pageZise=20')
  }

  getBrands(){
    if (this.brand.length > 0) return
    return this.http.get<string[]>(this.baseurl + 'product/brand').subscribe({
      next: response => this.brand = response
    })
  }

  getType(){
    if(this.type.length > 0) return
    return this.http.get<string[]>(this.baseurl + 'product/type').subscribe({
      next: response => this.type = response
    })
  }

  readonly bradsResource =  httpResource<string[]>(() => `${this.baseurl}/product/brand`)
  readonly typesResource = httpResource<string[]>(() => `${this.baseurl}/product/type`)
}
