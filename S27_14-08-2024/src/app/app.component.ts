import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { TabtaskComponent } from './tabtask/tabtask.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AttributedirectiveComponent,CategoryComponent,CommonModule,TabtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    headingContent:string = "Welcome to Data Binding"
}
