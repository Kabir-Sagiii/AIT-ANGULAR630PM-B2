import { Component,Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-best-of',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './best-of.component.html',
  styleUrl: './best-of.component.css'
})
export class BestOfComponent {
  @Input() mainTitle:any
@Input() data:any
}
