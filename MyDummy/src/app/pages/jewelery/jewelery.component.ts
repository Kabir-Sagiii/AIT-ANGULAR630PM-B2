import { Component } from '@angular/core';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductComponent } from "../../components/product/product.component";
@Component({
  selector: 'app-jewelery',
  standalone: true,
  imports: [ProductsComponent, ProductComponent],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.css'
})
export class JeweleryComponent {

}
