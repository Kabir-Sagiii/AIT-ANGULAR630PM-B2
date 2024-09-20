import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipe } from '../../../Custom-Pipe/MyPipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule,MyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

    todaysData = new Date(1995,11,17)
    data:any = {"name":"s1"}
    user:any = {
      city:"delhi"
    }
   promiseObject =  new Promise(function(resolve,reject){
            resolve({
              username:"sagar",
              city:"delhi",
              gender:"male"
            })
    })
}
