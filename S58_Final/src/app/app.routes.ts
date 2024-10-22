import { Routes } from '@angular/router';


import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';

import { ActivateRoute } from './Route-Guard/canActivate/CanActivate';

import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { PagenoutfoundComponent } from './components/pagenoutfound/pagenoutfound.component';
ProductdetailsComponent
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EducationalComponent } from './components/educational/educational.component';
import { ProfessionalComponent } from './components/professional/professional.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { JeweleryComponent } from './pages/jewelery/jewelery.component';


export const routes: Routes = [
   
     {path:"",component:HomeComponent},
     
     // {path:"electronics",component:ElectronicsComponent,
     //      canActivate:[ActivateRoute]},

     {path:"electronics",component:ElectronicsComponent,
          },
          {path:"jewelery",component:JeweleryComponent,
          },
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
