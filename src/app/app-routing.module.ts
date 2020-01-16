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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
