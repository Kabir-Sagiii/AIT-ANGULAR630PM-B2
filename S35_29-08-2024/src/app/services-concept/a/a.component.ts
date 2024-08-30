import { Component } from '@angular/core';
import { MyService } from '../MyService.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
title:string = ""
myservice:MyService
   constructor(){
    this.myservice=new MyService()
    this.title = this.myservice.title
   }
  getCompUser(){
   //100lines
  
 
  this.myservice.getUsers()
  }
}
