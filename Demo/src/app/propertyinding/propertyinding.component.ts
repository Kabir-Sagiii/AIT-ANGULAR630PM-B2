import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propertyinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './propertyinding.component.html',
  styleUrl: './propertyinding.component.css'
})
export class PropertyindingComponent {
      data:string =""
      v:string = ""
      getkey(event:any){
        console.log(event)
      }
      getData(event:any){
this.data = event.target.value
      }
  myTypeValue:string = "text"
  imageurl:string = "https://i.pinimg.com/originals/12/61/1a/12611a2fca0224acc9cddb7250f9880e.png"

   changeToText(){
     this.myTypeValue = "text"
   }
   changeToPassword(){
this.myTypeValue = "password"
   }

}
