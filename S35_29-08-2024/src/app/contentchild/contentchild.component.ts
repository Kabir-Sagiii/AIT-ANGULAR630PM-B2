import { Component,ContentChild } from '@angular/core';

@Component({
  selector: 'app-contentchild',
  standalone: true,
  imports: [],
  templateUrl: './contentchild.component.html',
  styleUrl: './contentchild.component.css'
})
export class ContentchildComponent {

  @ContentChild('p1') pRef:any

  changeContent(){
    this.pRef.nativeElement.innerText = "Para got changed with the help of ContentChild Decorator"
    this.pRef.nativeElement.style.color = "red"
  }

}
