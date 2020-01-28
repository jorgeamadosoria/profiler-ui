import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { KudosComponent } from './kudos/kudos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginGuard } from './guard/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    KudosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    AuthModule,
    FormsModule,
    NgbModule
  ],
  entryComponents: [
    KudosComponent
  ],
  providers: [ LoginGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
