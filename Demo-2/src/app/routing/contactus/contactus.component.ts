import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
isSubscribed:boolean = false
email:string=""
subscribed(){
  this.isSubscribed = true
}
   canDeactivate = ()=>{
      if(this.email!="" && !this.isSubscribed) {
        return confirm("Do you wana leave with subscribing")
      
      
      }else{
        return true
      }
      alert("ok")
   }
}
