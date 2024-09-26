import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-reactive-f',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-f.component.html',
  styleUrl: './reactive-f.component.css'
})
export class ReactiveFComponent implements OnInit {

  myform:FormGroup;s
  getData(){
console.log(this.myform)
  }

  ngOnInit(): void {
    this.myform = new FormGroup({
      username:new FormControl(null,Validators.required),
      password: new FormControl("123"),
      email:new FormControl("sagar@gmail.com")
    })
  }
  

}
