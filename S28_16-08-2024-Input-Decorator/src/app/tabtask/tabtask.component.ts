import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from '../Tech\'s/angular/angular.component';
import { ReactComponent } from '../Tech\'s/react/react.component';
import { NodeComponent } from '../Tech\'s/node/node.component';
@Component({
  selector: 'app-tabtask',
  standalone: true,
  imports: [CommonModule,AngularComponent,NodeComponent,ReactComponent],
  templateUrl: './tabtask.component.html',
  styleUrl: './tabtask.component.css'
})
export class TabtaskComponent {

techdata = ["Angular","React","Node JS","MongoDB","Express JS","Java","Python"]
tech:string="Angular"



techSelection(tech:string){
  this.tech = tech
  
}
}
