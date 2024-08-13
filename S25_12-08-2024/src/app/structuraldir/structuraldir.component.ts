import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-structuraldir',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structuraldir.component.html',
  styleUrl: './structuraldir.component.css'
})
export class StructuraldirComponent {
    
   day:string = "monday"
    showIf:boolean = false
    count:number = 15
    users = [{id:101,name:"S1"},{id:102,name:"S2"},{id:103,name:"S3"},{
      id:104,name:"S4"
    }]

    products = ["a","b","c"]
}
