import { Component, ViewEncapsulation } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css',
  providers:[MyserviceService],
  encapsulation:ViewEncapsulation.None
})
export class CompComponent {
  constructor(public ser:MyserviceService){

  }
}
