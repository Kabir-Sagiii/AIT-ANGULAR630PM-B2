import { Component } from '@angular/core';
import { RouterLinkActive,RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
// home:string='active'
// product:string =''

// assignActiveClass(activeLink:string){
//      if(activeLink==="home"){
//       this.product = ""
//       this.home = "active"
//      }else if(activeLink==='product') {
//       this.home =""
//       this.product = "active"

//      }
// }
}
