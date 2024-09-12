import { Component,inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-educational',
  standalone: true,
  imports: [],
  templateUrl: './educational.component.html',
  styleUrl: './educational.component.css',
 
})
export class EducationalComponent implements OnInit {

 router:ActivatedRoute = inject(ActivatedRoute)


ngOnInit(): void {
  console.log(this.router.snapshot.paramMap.get('id'))
  console.log(this.router.snapshot.params['id'])
}

}
