import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ngcontainer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {
     
  productNames = [{
    brandName:"Apple",
    model:"Iphone 15"
  },{
     brandName:"Samsung",
    model:"samsung ultra"
  },{
     brandName:"Apple",
    model:"Iphone 13"
  },{
      brandName:"Samsung",
    model:"samsung fold"
  }]
}
