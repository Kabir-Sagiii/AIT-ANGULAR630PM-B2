import { Component, ViewEncapsulation } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  providers:[MyserviceService],
  encapsulation:ViewEncapsulation.None
})
export class Comp1Component {

  constructor(public ser:MyserviceService){

  }
}
