import { Component , ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutComponent } from './pages/about/about.component';
import { SubmitDemoComponent } from './pages/submit-demo/submitDemo.component';
import { ReleasesComponent } from './pages/releases/releases.component';




const appRoutes:Routes = [
    
    {
        path: "",
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'releases',
        component: ReleasesComponent
    },{
        path: 'submit-demo',
        component: SubmitDemoComponent
    },
    {
        path: 'error-404',
        component: Error404Component ,
        data: {title: 'Error 404'}
    },
    {
        path:":name",
        component: ArtistComponent
    },
    {path: '**', redirectTo: '/error-404'}

]

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);