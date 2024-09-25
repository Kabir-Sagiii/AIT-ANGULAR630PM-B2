import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventbinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  viewText:string = ""

  getTextData(ref:any){
    this.viewText = ref.value
    console.log(this.viewText)
  }

  getData(event:any){
    this.viewText = event.target.value
    console.log(this.viewText)

  }
  changeViewText(){
    this.viewText = "Dummy Data"
  }
}
