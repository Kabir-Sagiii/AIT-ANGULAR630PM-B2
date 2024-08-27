import { Component,Input } from '@angular/core';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductdetailsComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

     @Input() productData:any = {image:"",price:0,productName:"",category:""}
}
