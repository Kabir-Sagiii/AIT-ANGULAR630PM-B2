import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
count:number = 0
  changeCount(value:string){
  if(value== "+"){
    if(this.count < 10)
this.count++
  }else{
    if(this.count >0)
    this.count--
  }
  }

}
