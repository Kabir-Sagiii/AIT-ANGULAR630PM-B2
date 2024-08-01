import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BrandsectionComponent } from './brandsection/brandsection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MainComponent,
    FooterComponent,CarouselComponent,BrandsectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App Component';
  changeContent(){
    this.title="Hello Angular"
  }
  getPreviousContent(){
    this.title = "Welcome to Angular"
  }
}
