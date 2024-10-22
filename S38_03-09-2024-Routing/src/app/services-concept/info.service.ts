import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }
    
     getUserNameInformation(){
      return "Rajiv Shukla"
     }
}
