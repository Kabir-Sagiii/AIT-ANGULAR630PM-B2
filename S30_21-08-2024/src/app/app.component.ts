import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductsComponent } from './Task/products/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
