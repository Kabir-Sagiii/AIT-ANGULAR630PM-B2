import { Component, OnInit } from '@angular/core';
import { RouterLink,ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private activate:Router){

  }

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
     getLimitedProducts(e:any){
  
      fetch(`https://fakestoreapi.com/products?limit=${e.target.value}`)
      .then((res)=>{return res.json()})
      .then((data)=>{
        console.log(data)
        this.productsData = data
      })
      .catch((error)=>{
        alert("Something went wrong")
      })
     }
     ngOnInit(): void {
       this.getProducts()
     }
}
