import { Component } from '@angular/core';
import { MyService } from '../MyService.service';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent {

  title:string = ""
  myservice:MyService
  constructor(){
    this.myservice=new MyService()
    this.title = this.myservice.title
   }

  getallUsers(){
    //100lines
   
    this.myservice.getUsers()
    this.title = this.myservice.title
  }

}
