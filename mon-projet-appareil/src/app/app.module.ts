import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule} from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGard} from './services/Auth-gard.service';

const appRoutes:Routes = [
  {path:'appareil',canActivate:[AuthGard],component:AppareilViewComponent},
  {path:'appareil/:id',canActivate:[AuthGard],component:SingleAppareilComponent},
  {path:'auth',component:AuthComponent},
  {path:'',canActivate:[AuthGard],component:AppareilViewComponent},
  {path:'not-found',component:FourOhFourComponent},
  {path:'**',redirectTo:'not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
