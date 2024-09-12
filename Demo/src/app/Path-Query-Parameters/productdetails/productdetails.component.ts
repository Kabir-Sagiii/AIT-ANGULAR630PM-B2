import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent implements OnInit {
data:any = null
  constructor(private activateRoute:ActivatedRoute){

    

  }
  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.params['id'])
    fetch(`https://fakestoreapi.com/products/${this.activateRoute.snapshot.params['id']}`)
      .then((res)=>{return res.json()})
      .then((data)=>{
        console.log(data)
        this.data = data
      })
      .catch((error)=>{
        alert("Something went wrong")
      })

     }
  
}
