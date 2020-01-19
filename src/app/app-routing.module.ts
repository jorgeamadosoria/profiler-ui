import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'attributes',
    loadChildren: () => import('./attributes/attributes.module').then(m => m.AttributeModule),
  },
  {
    path: 'person',
    loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
