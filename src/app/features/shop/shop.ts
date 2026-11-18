import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { Shopservice } from '../../services/shopservice';
import { MatCard } from '@angular/material/card'
import { ProductItem } from './product-item/product-item';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';



@Component({
  selector: 'app-shop',
  imports: [ProductItem],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  private shopService = inject(Shopservice)
  private dialogServices = inject(MatDialog)

  products: Product[] = []
  ngOnInit(): void {
    this.initializeShop()

  }
  initializeShop(){
    this.shopService.getBrands()
    this.shopService.getType()
    this.shopService.getProduct().subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),


    })
  }

}

