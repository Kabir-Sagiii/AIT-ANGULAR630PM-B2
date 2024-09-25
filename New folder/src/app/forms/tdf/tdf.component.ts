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
      console.log(formRef)
      // console.log(formRef.controls["email"].value)
      // const {username,password,email}  = formRef.value
      // console.log(username,password,email)
    }

    setV(formR:any){
    formR.setValue({
      username:'hi',
      password:'hi',
      email:'eejk'
    })
    }

    patchV(myform:any){
myform.form.patchValue({
  email:'hi@gmail.com'
})
    }

    resetV(myform:any){
      myform.reset()
    }
}
