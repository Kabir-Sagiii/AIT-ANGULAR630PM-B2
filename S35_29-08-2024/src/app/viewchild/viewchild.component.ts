import { Component,ViewChild,ViewChildren } from '@angular/core';
import { ChildCComponent } from '../child-c/child-c.component';
@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ChildCComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {

          @ViewChild('myChildReference')   refOfChildComp:any
    @ViewChildren('mytitle') references:any
  // @ViewChild('mytitle') h2Reference:any
  // @ViewChild('mytitle1') h2Alternate:any

  getH2Reference(){
   this.references._results[1].nativeElement.style.backgroundColor="black"
   this.references._results[1].nativeElement.style.color="white"
      this.references._results[1].nativeElement.style.padding="30px"
    //  this.h2Reference.nativeElement.style.color="blue"
    //  this.h2Alternate.nativeElement.innerText = "Title Got Changed"
  }

  getChildMethod(){
     this.refOfChildComp.getChild()
  }

}
