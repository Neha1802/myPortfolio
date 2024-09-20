import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio-website/home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'portfolio-website', loadChildren: () => import('./portfolio-website/portfolio-website.module').then(m=>m.PortfolioWebsiteModule)
    }
];
