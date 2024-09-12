import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { ProfileComponent } from './routing/profile/profile.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { LoginComponent } from './routing/login/login.component';
import { ProductsComponent } from './Task/products/products.component';
import { GithubHomeComponent } from './Github/github-home/github-home.component';
import { PagenoutfoundComponent } from './routing/pagenoutfound/pagenoutfound.component';
export const routes: Routes = [
   
     {path:"",component:GithubHomeComponent},
     {path:"products",component:ProductsComponent},
     {path:"profile",component:ProfileComponent},
     {path:"contact",component:ContactusComponent},
     {path:"login",component:LoginComponent},
     {path:"**",component:PagenoutfoundComponent},
     
];
