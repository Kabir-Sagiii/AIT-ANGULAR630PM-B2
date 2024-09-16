import { Component,inject } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
auth = inject(AuthService)
router = inject(Router)


login(){
  this.router.navigate(["/"])
  this.auth.login()
}
}
