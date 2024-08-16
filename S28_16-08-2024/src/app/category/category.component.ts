import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  @Input()
  parentData = {image:"",title:""} // purpose of this Property is to hold Parent Data
}
