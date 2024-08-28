import { Component } from '@angular/core';
import { InputCComponent } from '../input-c/input-c.component';
// import myImage from "Path of the image"
@Component({
  selector: 'app-text-info',
  standalone: true,
  imports: [InputCComponent],
  templateUrl: './text-info.component.html',
  styleUrl: './text-info.component.css'
})
export class TextInfoComponent {

  childdata:string = ""

        getChildData(data:any){
          this.childdata = data
        }
}
