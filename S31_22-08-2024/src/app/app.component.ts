import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {GithubHomeComponent} from "./Github/github-home/github-home.component"
import { ProductsComponent } from './Task/products/products.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,GithubHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
