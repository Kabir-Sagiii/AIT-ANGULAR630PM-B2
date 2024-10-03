import { Component } from '@angular/core';
import {MatDialog,MatDialogContent,MatDialogActions,MatDialogClose}from '@angular/material/dialog'

@Component({
  selector: 'app-dialogc',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent,MatDialogClose],
  templateUrl: './dialogc.component.html',
  styleUrl: './dialogc.component.css'
})
export class DialogcComponent {

}
