import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',

  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header]
})
export class App implements OnInit {
  baseurl = 'https://localhost:7296/api/'
  products: any[] = []
  private http = inject(HttpClient)
   ngOnInit(): void {
     this.http.get<any>(this.baseurl + 'product' + '/All').subscribe({
      next:response => this.products = response.data,
      error:error => console.log(error),
      complete:() => console.log('complete')


     })
   }
   title = 'shopping-center';
}
