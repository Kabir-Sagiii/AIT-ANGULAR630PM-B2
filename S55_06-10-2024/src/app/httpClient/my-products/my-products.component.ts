import { Component,inject } from '@angular/core';
import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent {
  productsData:any = []

  addedInCart:boolean = false

   http=inject(HttpClient)
  getProducts(){
this.http.get("http://localhost:3000/products").subscribe({
  next : (data)=>{
console.log(data)
this.productsData = data
  },
  error:(error)=>{
    alert("Something went wrong")
    console.log(error)
  },
  complete:()=>{
    console.log("Completed")
  }
})
  }

  addCart(data:any){
    let headers = new HttpHeaders()
    headers.set("Content-Type","application/json")
    headers.set("Authorization",`Bearer ${''}`)

   this.http.post("http://localhost:3000/add-to-cart",data,{headers}).subscribe({
    next:(res)=>{
      alert("Successfully added the Product")
       console.log(res)
       this.addedInCart = true
    },
    error:(error)=>{
      alert("Failed to add product in the card")
    }
   })

  }
}
