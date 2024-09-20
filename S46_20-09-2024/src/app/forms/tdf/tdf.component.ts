import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent {
    getUsersData(formRef:any){
      console.log(formRef.controls["email"].value)
      const {username,password,email}  = formRef.value
      console.log(username,password,email)
    }
}
