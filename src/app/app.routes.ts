import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import path from 'path';
import { Component } from '@angular/core';
import { CvComponent } from './cv/cv.component';

import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [
    {path:"", redirectTo:"home" ,pathMatch:'full'},
    { path: "home", component: HomeComponent, title:"Home" },
    { path: "about", component: AboutComponent, title:"About Us" },
    
    {path:'**',component:NotfoundComponent},
    
];
