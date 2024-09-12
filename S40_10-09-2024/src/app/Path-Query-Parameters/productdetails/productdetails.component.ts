import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {

  constructor(private activateRoute:ActivatedRoute){

    console.log(this.activateRoute.snapshot.params['id'])

  }
}
