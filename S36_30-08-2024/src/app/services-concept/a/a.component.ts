import { Component,inject } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
  providers :[DatasService]
})
export class AComponent {

    username:string=""
  

  dataservice= inject(DatasService)
  // constructor(dataservice:DatasService){
  //  this.dataservice = dataservice
  // }


    getUserName(){
 this.username= this.dataservice.username
    }
}
