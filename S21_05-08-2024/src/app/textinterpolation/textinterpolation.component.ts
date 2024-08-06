import { Component } from '@angular/core';

@Component({
  selector: 'app-textinterpolation',
  standalone: true,
  imports: [],
  templateUrl: './textinterpolation.component.html',
  styleUrl: './textinterpolation.component.css'
})
export class TextinterpolationComponent {

    title:string = "First Dynamic data"
    subTitle:string = "subtitle"
    price:number = 3456 
    qty:number = 5 
    width="500"
    
    imageurl = "https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg"


    user = {
      username:"Raj Verma",
      id:101,
      gender:"male"
    }

         changeUser():void{
            this.user = {
              username:"Rahul Verma",
              id:202,
              gender:"male"
            }
            this.width = "800"
            this.imageurl = "https://i.pinimg.com/originals/12/61/1a/12611a2fca0224acc9cddb7250f9880e.png"
         }
}
