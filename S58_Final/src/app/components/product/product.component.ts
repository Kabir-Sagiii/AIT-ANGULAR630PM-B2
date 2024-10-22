import { Component,Input,ViewChild } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
CommonModule
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @ViewChild('pd') productDetailsReference:any

  @Input() productData:any = {image:"",price:0,title:"",category:"",description:"",rating:{rate:0,count:0}}
      
  sendProductDetails(){
    this.productDetailsReference.getProductDetails(this.productData)
  }

    }
