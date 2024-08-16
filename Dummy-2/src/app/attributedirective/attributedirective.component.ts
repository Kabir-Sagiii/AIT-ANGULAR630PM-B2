import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attributedirective',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attributedirective.component.html',
  styleUrl: './attributedirective.component.css'
})
export class AttributedirectiveComponent {
  
  dynamicStyle:string = 'greenContainer'
  isGreen:boolean = true
  colorName:string = 'red'
  bgColor:string = 'black'


  changeClassStyle(value:boolean){
    // this.dynamicStyle = value
    this.isGreen = value


  }

changeColorStyle(value:string,bgcolor:string){
  this.colorName = value
  this.bgColor = bgcolor
}
}
