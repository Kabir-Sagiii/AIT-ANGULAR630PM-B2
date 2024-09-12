import { Routes } from '@angular/router';
import { GithubHomeComponent } from './Github/github-home/github-home.component';
import { Component } from '@angular/core';
import { ProductsComponent } from './Task/products/products.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
export const routes: Routes = [
    {path:'',component:GithubHomeComponent},
    {path:'products',component:ProductsComponent},
    {path:"**",component:PagenotfoundComponent}
];
