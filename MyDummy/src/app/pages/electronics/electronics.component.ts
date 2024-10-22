import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsComponent } from '../../components/products/products.component';
@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterLink,ProductsComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
electronicsData:any = []

ngOnInit(): void {
  fetch(`http://localhost:3000/electronics`)
  .then((res) => { return res.json() })
  .then((data) => {
    console.log(data)
    this.electronicsData = data
  })
  .catch((error) => {
    alert("Something went wrong")
    console.log(error)
  })
}

}
