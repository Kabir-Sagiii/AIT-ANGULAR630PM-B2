import { Component } from '@angular/core';
import { NamecompComponent } from '../namecomp/namecomp.component';

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NamecompComponent,FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  cdata:string = ""
pname="hi"

getData(ref:any){
  alert(ref.value)
  this.pname = ref.value
}

get(v:string){
   this.cdata = v
}

}
