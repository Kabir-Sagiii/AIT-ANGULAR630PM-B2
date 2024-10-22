import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mobilep',
  standalone: true,
  imports: [],
  templateUrl: './mobilep.component.html',
  styleUrl: './mobilep.component.css'
})
export class MobilepComponent {
@Input() image:any
@Input() title:any
}
