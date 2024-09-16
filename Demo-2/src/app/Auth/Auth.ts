import { AuthService } from "../auth.service"
import { inject, Inject } from "@angular/core"

export const canActivateGuard = ()=>{
    var auth = inject(AuthService)
    if(auth.isLoggedIn){
        return true
    }else {
        return false
    }
    
}

export const canActivateChildGuard = ()=>{
   return canActivateGuard()
}

