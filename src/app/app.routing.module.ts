import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', data: [''], loadChildren: './pages/landing/landing.module#LandingModule' },
    { path: 'about', data: [''], loadChildren: './pages/about/about.module#AboutModule' },
    { path: 'project', data: [''], loadChildren: './pages/project/project.module#ProjectModule' },
    { path: 'pricing', data: [''], loadChildren: './pages/pricing/pricing.module#PricingModule' },
    { path: 'team', data: [''], loadChildren: './pages/team/team.module#TeamModule' },
    { path: 'contact', data: [''], loadChildren: './pages/contact/contact.module#ContactModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
