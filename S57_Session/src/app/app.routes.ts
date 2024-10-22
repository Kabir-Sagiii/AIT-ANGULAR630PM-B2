import { Routes } from '@angular/router';


import { ProfileComponent } from './routing/profile/profile.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { LoginComponent } from './routing/login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenoutfoundComponent } from './routing/pagenoutfound/pagenoutfound.component';
import { EducationalComponent } from './routing/educational/educational.component';
import { ProfessionalComponent } from './routing/professional/professional.component';

import { ProductdetailsComponent } from './Path-Query-Parameters/productdetails/productdetails.component';
import { ElectronicsComponent } from './Path-Query-Parameters/electronics/electronics.component';
import { ActivateRoute } from './Route-Guard/canActivate/CanActivate';
import { ProductsComponent } from './Task/products/products.component';

export const routes: Routes = [
   
     {path:"",component:HomeComponent},
     {path:"electronics",component:ProductsComponent},
     
     // {path:"electronics",component:ElectronicsComponent,
     //      canActivate:[ActivateRoute]},

     // {path:"electronics",component:ElectronicsComponent,
     //      },

     {path:"profile",canActivateChild:[ActivateRoute],component:ProfileComponent,children:[
     {path:'education',component:EducationalComponent},
     {path:'professional',component:ProfessionalComponent},
     ]},


     {path:"contact",component:ContactusComponent,canDeactivate:[(contactuse:ContactusComponent)=>{
          return contactuse.allowUserToLeave()
     }]},

     {path:"login",component:LoginComponent},
     {path:"productdetails/:id",component:ProductdetailsComponent},
     {path:"**",component:PagenoutfoundComponent},
     
];
