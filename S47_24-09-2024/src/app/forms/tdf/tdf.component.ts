import { Component,OnInit,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent  {

  @ViewChild('myform') myform:NgForm ;
    getUsersData(formRef:any){
    //  console.log(formRef)
     console.log(this.myform)
    }
    getForm(){
      console.log(this.myform)
    }
    
}
