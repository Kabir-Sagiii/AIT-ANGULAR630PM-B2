import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrandsectionComponent } from './brandsection/brandsection.component';
import {TrimmerpComponent} from './trimmerp/trimmerp.component'
import {MobilepComponent} from "./mobilep/mobilep.component"
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MainComponent,
    FooterComponent,CarouselComponent,BrandsectionComponent,MobilepComponent,TrimmerpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    headingContent:string = "Welcome to Data Binding"
}
