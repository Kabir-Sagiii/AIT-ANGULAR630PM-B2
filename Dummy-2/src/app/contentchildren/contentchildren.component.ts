import { Component,ContentChild,ContentChildren } from '@angular/core';

@Component({
  selector: 'app-contentchildren',
  standalone: true,
  imports: [],
  templateUrl: './contentchildren.component.html',
  styleUrl: './contentchildren.component.css'
})
export class ContentchildrenComponent {

        @ContentChildren('Ref')  domRef:any
    //  @ContentChild('h2Ref') h2:any
    //  @ContentChild('btnRef') btn:any

  modifyH2(){
    this.domRef._results[1].nativeElement.style.color="red"
    // this.h2.nativeElement.style.color='red'
  }

  modifyButton(){
// this.btn.nativeElement.innerText = "Details"
 this.domRef._results[0].nativeElement.innerText="Details"
  }



}
