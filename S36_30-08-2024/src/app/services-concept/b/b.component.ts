import { Component } from '@angular/core';
import { MyService } from '../MyService.service';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css',
  providers:[DatasService]
})
export class BComponent {
// username:string=""

// dataservice:DatasService ;

// constructor(private datas : DatasService){
// // this.dataservice = datas
// }
constructor(public datas : DatasService){
  // this.dataservice = datas
  }

  updateUserName(){
    this.datas.username = "Rohan Verma"
  }

// getUserName(){
//   this.username = this.datas.username
// }
 
 
  
}
