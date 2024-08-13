import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldir',
  standalone: true,
  imports: [],
  templateUrl: './structuraldir.component.html',
  styleUrl: './structuraldir.component.css'
})
export class StructuraldirComponent {
    
    showIf:boolean = false
    count:number = 15
    users = ["raj","yash"]
}
