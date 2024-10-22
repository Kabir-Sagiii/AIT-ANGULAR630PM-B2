import { Component, OnInit,Input } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { CommonModule } from '@angular/common';
CommonModule
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
products:any = []
@Input() url:any
@Input() bgImage:any
@Input() title:any
getProducts() {
    
  fetch(this.url)
    .then((res) => { return res.json() })
    .then((data) => {
      console.log(data)
      this.products = data
    })
    .catch((error) => {
      alert("Something went wrong")
    })

}
 
     ngOnInit(): void {
       this.getProducts()
     }
}
