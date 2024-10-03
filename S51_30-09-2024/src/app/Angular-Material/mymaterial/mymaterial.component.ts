import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-mymaterial',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatCardModule],
  templateUrl: './mymaterial.component.html',
  styleUrl: './mymaterial.component.css'
})
export class MymaterialComponent {

}
