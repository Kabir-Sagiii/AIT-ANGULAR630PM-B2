import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-trimmerp',
  standalone: true,
  imports: [],
  templateUrl: './trimmerp.component.html',
  styleUrl: './trimmerp.component.css'
})
export class TrimmerpComponent {
 @Input() image :any
 @Input() title:any
}
