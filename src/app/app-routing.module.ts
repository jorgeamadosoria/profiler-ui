import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LoginGuard } from './guard/login.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'attributes',
    loadChildren: () => import('./attributes/attributes.module').then(m => m.AttributeModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'talentscape',
    loadChildren: () => import('./talentscape/talentscape.module').then(m => m.TalentscapeModule),
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
