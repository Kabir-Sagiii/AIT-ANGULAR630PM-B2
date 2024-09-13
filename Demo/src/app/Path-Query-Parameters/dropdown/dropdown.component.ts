import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  constructor(private router:Router){

  }
  add(id:any){
   this.router.navigate(["/products"],{queryParams:{limit:id.target.value}})
  }
}
