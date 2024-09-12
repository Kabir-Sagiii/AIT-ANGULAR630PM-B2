import { Component,inject, ViewEncapsulation } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
  encapsulation:ViewEncapsulation.Emulated
  // providers :[DatasService]
})
export class AComponent {

    username:string=""
  

  dataservice= inject(DatasService)
  


    getUserName(){
 this.username= this.dataservice.username
    }
}
