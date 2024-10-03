import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TextInfoComponent } from './OutputDecorator/text-info/text-info.component';
import { InputComponent } from './InputDecorator/input/input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    
}
