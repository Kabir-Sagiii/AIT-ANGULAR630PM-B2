import { Injectable } from '@angular/core';
import { InfoService } from "./info.service"

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  private username:string = "Raj Verma"
  constructor(private infoservice:InfoService) {
    console.log("dataservice called")
   }

      getUserName(){
        this.username = this.infoservice.getUserNameInformation()
        return this.username
      }
}
