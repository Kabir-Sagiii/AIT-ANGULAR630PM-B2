import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

productsData:any = []


     getProducts(){
      //fetch logic to get the data
      fetch("https://fakestoreapi.com/products")
      .then((res)=>{return res.json()})
      .then((data)=>{
        console.log(data)
        this.productsData = data
      })
      .catch((error)=>{
        alert("Something went wrong")
      })

     }
}
