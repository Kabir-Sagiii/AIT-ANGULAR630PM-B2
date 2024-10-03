import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive-f',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-f.component.html',
  styleUrl: './reactive-f.component.css'
})
export class ReactiveFComponent {
isSubmitted:boolean = false
       
 myform = new FormGroup({
  username : new FormControl(null,Validators.required),
  password : new FormControl(null,[Validators.required,Validators.maxLength(5)]),
  email : new FormControl(null),
  skills:new FormArray([
    new FormControl(null)
  ])
 })

        

  getUserInfo(){
    const {username,password,email}  = this.myform.value
    console.log(username,password,email)
    console.log(this.myform)
    this.isSubmitted = true
  }

  addControl(){
(<FormArray>this.myform.get('skills')).push(new FormControl(null))
  }

  deleteControl(i:number){
   
   var c =  <FormArray>this.myform.get('skills')
   c.removeAt(i)
   console.log(this.myform.get('skills'))
    
  }
}
