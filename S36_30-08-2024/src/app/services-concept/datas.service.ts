import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  username:string = "Raj Verma"
  constructor() {
    console.log("dataservice called")
   }
}
