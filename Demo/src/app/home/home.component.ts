import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { HeaderComponent } from '../routing/header/header.component';
import { BrandsectionComponent } from '../brandsection/brandsection.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CarouselComponent,BrandsectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
