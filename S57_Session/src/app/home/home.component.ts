import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BestOfComponent } from '../best-of/best-of.component';

import { CarouselComponent } from '../carousel/carousel.component';
import { BrandsectionComponent } from '../brandsection/brandsection.component';
import {TrimmerpComponent} from '../trimmerp/trimmerp.component'
import {MobilepComponent} from "../mobilep/mobilep.component"
import { FooterComponent } from "../routing/footer/footer.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, BrandsectionComponent, TrimmerpComponent, MobilepComponent, FooterComponent, BestOfComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
