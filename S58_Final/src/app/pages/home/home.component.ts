import { Component } from '@angular/core';
FooterComponent


import { HeaderComponent } from '../../components/header/header.component';
import { BestOfComponent } from '../../components/best-of/best-of.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { BrandsectionComponent } from '../../components/brandsection/brandsection.component';
import { TrimmerpComponent } from '../../components/trimmerp/trimmerp.component';
import { MobilepComponent } from '../../components/mobilep/mobilep.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, BrandsectionComponent, TrimmerpComponent, MobilepComponent, FooterComponent, BestOfComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
