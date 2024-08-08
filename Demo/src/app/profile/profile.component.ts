import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
   theme = 'color:green;background-color:black'
   
  showDarkTheme:boolean = false
  rightPanel:string = "lightRightPanel"
  label:string = "Check to switch Dark Mode"
  
  userdata = {
    image:"https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
    name:"Yash Verma",
    gender:"male",
    email:"yash@gmail.com"
  }

  changeUser(gender:string){
      gender==="male" ? this.userdata = {
        image:"https://i0.wp.com/www.torontophotographerz.com/wp-content/uploads/2017/06/Business-portrait-23.jpg?fit=800%2C1200&ssl=1",
        name:"Yash Verma",
        gender:"male",
        email:"yash@gmail.com"
      }  :this.userdata = {
        image:"https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?rs=1&pid=ImgDetMain",
        name:"Rutu Verma",
        gender:"female",
        email:"Rutu@gmail.com"
      }
  }
  changeTheme(event:any){
    if(event.target.checked){
//  this.rightPanel="darkRightPanel"
this.showDarkTheme = true
 this.label = "Uncheck to switch Light Mode"

    }else {
      this.showDarkTheme = false
      //  this.rightPanel="lightRightPanel"
       this.label = "Check to switch Dark Mode"
    }
   
  }

}
