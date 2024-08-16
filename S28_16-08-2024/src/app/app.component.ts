import { Component } from '@angular/core';
import {CommonModule} from '@angular/common'
import { TabtaskComponent } from './tabtask/tabtask.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { CategoryComponent } from './category/category.component';
import { CategoriesComponent } from './categories/categories.component';
import { InputComponent } from './InputDecorator/input/input.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent,CategoriesComponent,AttributedirectiveComponent,CategoryComponent,CommonModule,TabtaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    headingContent:string = "Welcome to Data Binding"
}
