import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

      inputValue:string = ""

      getInputData(inputref:any){
        this.inputValue =  inputref.value
      }
}
