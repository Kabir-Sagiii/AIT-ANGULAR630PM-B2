import { Component, ViewEncapsulation } from '@angular/core';
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
import { DatasService } from './services-concept/datas.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AComponent,RouterOutlet,BComponent,NavbarComponent,ContentchildrenComponent,ViewchildComponent, ProductsComponent, NgcontentComponent, GithubHomeComponent, NgtemplateComponent, NgcontainerComponent, ContentchildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None
  // providers:[DatasService]
})
export class AppComponent {
    
}
