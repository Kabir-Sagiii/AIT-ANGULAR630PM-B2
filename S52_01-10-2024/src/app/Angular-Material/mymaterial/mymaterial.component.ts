import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
@Component({
  selector: 'app-mymaterial',
  standalone: true,
  imports: [MatStepperModule,MatInputModule,MatCheckboxModule,MatRadioModule,MatMenuModule,MatButtonModule,MatIconModule,MatCardModule],
  templateUrl: './mymaterial.component.html',
  styleUrl: './mymaterial.component.css'
})
export class MymaterialComponent {

}
