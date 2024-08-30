import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'

import { InputComponent } from './input/input.component';
import { TabtaskComponent } from './tabtask/tabtask.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { CategoryComponent } from './category/category.component';
import { Comp1Component } from './services/comp1/comp1.component';
import { CompComponent } from './services/comp/comp.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comp1Component,CompComponent,AttributedirectiveComponent,InputComponent,CategoryComponent,CommonModule,TabtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    headingContent:string = "Welcome to Data Binding"
}
