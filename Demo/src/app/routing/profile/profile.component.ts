import { Component } from '@angular/core';
import {RouterLink,RouterOutlet} from "@angular/router"
import { FilterPipe } from '../../../Custom-Pipes/Pipes';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FilterPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
s1:string = "raj"
s2:string = "sagar"
}
