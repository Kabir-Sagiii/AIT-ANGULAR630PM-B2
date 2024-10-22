import { Component, OnInit } from '@angular/core';

import { ProductComponent } from '../product/product.component';
// import { allProductsData } from '../Data/productsdata';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
products:any = []

getProducts() {
    
  fetch("http://localhost:3000/products")
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
