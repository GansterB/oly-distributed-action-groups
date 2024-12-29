import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SendComponent } from './pages/send/send.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'send', component: SendComponent },
    { path: 'user/:id', component: UserComponent },
];
