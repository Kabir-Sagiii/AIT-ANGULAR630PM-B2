import { Component, ViewEncapsulation } from '@angular/core';



import { HeaderComponent } from './routing/header/header.component';
import { FooterComponent } from './routing/footer/footer.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
    
}
