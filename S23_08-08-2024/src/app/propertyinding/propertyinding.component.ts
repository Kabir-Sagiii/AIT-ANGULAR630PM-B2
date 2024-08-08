import { Component } from '@angular/core';

@Component({
  selector: 'app-propertyinding',
  standalone: true,
  imports: [],
  templateUrl: './propertyinding.component.html',
  styleUrl: './propertyinding.component.css'
})
export class PropertyindingComponent {
     
  myTypeValue:string = "text"
  imageurl:string = "https://i.pinimg.com/originals/12/61/1a/12611a2fca0224acc9cddb7250f9880e.png"

   changeToText(){
     this.myTypeValue = "text"
   }
   changeToPassword(){
this.myTypeValue = "password"
   }

}
