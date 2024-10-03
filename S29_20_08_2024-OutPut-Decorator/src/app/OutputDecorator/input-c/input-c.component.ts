import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-c.component.html',
  styleUrl: './input-c.component.css'
})
export class InputCComponent {

     inputData:string = ""
   @Output()  myEvent  =new EventEmitter()

     triggerMyCustomEvent(){
     //Trigger custom event 
       this.myEvent.emit(this.inputData)
     }
}
