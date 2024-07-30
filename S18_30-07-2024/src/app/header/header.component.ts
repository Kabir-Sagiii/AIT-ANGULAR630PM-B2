import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  // template:`
  // <h2 class="title">Without HTML File</h2>
  // <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, aperiam?</p>
  // <button> Submit </button>
  // `,
  //  styles:'p{color:red}'
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
