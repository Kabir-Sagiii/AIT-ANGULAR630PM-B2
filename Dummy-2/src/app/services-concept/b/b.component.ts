import { Component,ViewEncapsulation } from '@angular/core';
import { MyService } from '../MyService.service';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
  encapsulation:ViewEncapsulation.None
  // providers:[DatasService]
})
export class BComponent {

constructor(public datas : DatasService){
 
  }

  updateUserName(){
    this.datas.username = "Rohan Verma"
  }

 
 
  
}
