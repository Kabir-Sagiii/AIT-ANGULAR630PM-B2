import { Routes } from '@angular/router';
import {canActivateGuard,canActivateChildGuard} from "./Auth/Auth"
import { HomeComponent } from './routing/home/home.component';
import { ProfileComponent } from './routing/profile/profile.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { LoginComponent } from './routing/login/login.component';
import { ProductcardComponent } from './Path-Query-Parameters/productcard/productcard.component';
import { GithubHomeComponent } from './Github/github-home/github-home.component';
import { PagenoutfoundComponent } from './routing/pagenoutfound/pagenoutfound.component';
import { EducationalComponent } from './routing/educational/educational.component';
import { ProfessionalComponent } from './routing/professional/professional.component';
import { ProductsComponent } from './Path-Query-Parameters/products/products.component';
import { ProductdetailsComponent } from './Path-Query-Parameters/productdetails/productdetails.component';
import { ElectronicsComponent } from './Path-Query-Parameters/electronics/electronics.component';

export const routes: Routes = [
   
     {path:"",component:ProductcardComponent},
     {path:"products",component:ProductsComponent},
     {path:"electronics",component:ElectronicsComponent, canActivate:[canActivateGuard]},
     {path:"profile",component:ProfileComponent,canActivateChild:[canActivateChildGuard],children:[
          {path:'education',component:EducationalComponent},
          {path:'professional',component:ProfessionalComponent},
     ]},


     {path:"contact",component:ContactusComponent,canDeactivate:[(comp:ContactusComponent)=>{return comp.canDeactivate()}]},
     {path:"login",component:LoginComponent},
     {path:"productdetails/:id",component:ProductdetailsComponent,canActivate:[]},
     {path:"**",component:PagenoutfoundComponent},
     
];
