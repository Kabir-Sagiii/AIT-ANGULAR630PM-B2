import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ContentchildrenComponent } from './contentchildren/contentchildren.component';
import { ContentchildComponent } from './contentchild/contentchild.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { AComponent } from './services-concept/a/a.component';
import { BComponent } from './services-concept/b/b.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { NgtemplateComponent } from './ngtemplate/ngtemplate.component';
import {GithubHomeComponent} from "./Github/github-home/github-home.component"
import { ProductsComponent } from './Task/products/products.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AComponent,BComponent,ContentchildrenComponent,ViewchildComponent, ProductsComponent, NgcontentComponent, GithubHomeComponent, NgtemplateComponent, NgcontainerComponent, ContentchildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
