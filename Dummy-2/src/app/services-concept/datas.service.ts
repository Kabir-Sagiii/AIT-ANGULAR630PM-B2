import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class DatasService {

  username:string = "Raj Verma"
  constructor() {
    console.log("dataservice called")
   }
}
