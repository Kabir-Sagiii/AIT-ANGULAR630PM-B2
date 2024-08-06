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
      image:"https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg",
      name:"Raj Verma",
      id:101,
      gender:"male"
    }
    changeUser(event:any){
      event.target.innerText="Datachanged"
      this.user = {
        image:"https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0",
        name:"Yash",
        id:101,
        gender:"male"
      }
    }

        //  changeUser():void{
        //     this.user = {
        //       username:"Rahul Verma",
        //       id:202,
        //       gender:"male"
        //     }
        //     this.width = "800"
        //     this.imageurl = "https://i.pinimg.com/originals/12/61/1a/12611a2fca0224acc9cddb7250f9880e.png"
        //  }
}
