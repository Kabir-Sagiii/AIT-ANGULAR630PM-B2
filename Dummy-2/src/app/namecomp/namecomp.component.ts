import { Component,Input,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-namecomp',
  standalone: true,
  imports: [],
  templateUrl: './namecomp.component.html',
  styleUrl: './namecomp.component.css'
})
export class NamecompComponent {
@Input()
name:string = "" ;
@Output()
 event=new EventEmitter()


getData(ref:any){
  this.event.emit("hi")

}
}
