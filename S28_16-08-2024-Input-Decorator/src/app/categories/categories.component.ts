import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

     categoriesData = [
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",title:"Grocery"},
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",title:"Mobiles"},
      {image:"https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100",title:"Top Offers"},
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",title:"Grocery"},
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",title:"Mobiles"},
      {image:"https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100",title:"Top Offers"},
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100",title:"Grocery"},
      {image:"https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100",title:"Mobiles"},
      {image:"https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100",title:"Top Offers"}
    ]
}
