import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Shopservice } from '../../services/shopservice';
import {MatCard} from '@angular/material/card'



@Component({
  selector: 'app-shop',
  imports: [MatCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
   private shopService = inject(Shopservice)
  products: Product[] = []
   ngOnInit(): void {
     this.shopService.getProduct().subscribe({
      next:response => this.products = response.data,
      error:error => console.log(error),


     })
   }

}
