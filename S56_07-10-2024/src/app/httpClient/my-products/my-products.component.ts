import { Component,inject, OnInit } from '@angular/core';
import { HttpClientModule,HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-my-products',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './my-products.component.html',
  styleUrl: './my-products.component.css'
})
export class MyProductsComponent implements OnInit {
  productsData:any = []
  product:any = {
    "id": "",
      "title": "",
      "price": 0,
      "description": "",
      "category": "",
      "image": "",
      "rating": {
        "rate": 0,
        "count": 0
      }
  }
  showForm:boolean = false

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

  showFormWithData(product:any){
    this.showForm = true
    this.product = product
  }

  updateProduct(){
    let headers = new HttpHeaders() 
    
    headers.set('Authorization',`Bearer ${1234}`)
    headers.set('Content-Type',`application/json`)

    this.http.put(`http://localhost:3000/products/${this.product.id}`,this.product,{headers}).subscribe({
      next:(data)=>{
        alert("Product updated")
        this.showForm = false
      },
      error:()=>{
        alert("error while updating")
      }
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }
}
