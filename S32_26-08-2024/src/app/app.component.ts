import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import {GithubHomeComponent} from "./Github/github-home/github-home.component"
import { ProductsComponent } from './Task/products/products.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent,NgcontentComponent,GithubHomeComponent,NgtemplateComponent,NgcontainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
