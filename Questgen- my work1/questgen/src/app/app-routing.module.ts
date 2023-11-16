import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPricingComponent } from './app-pricing/app-pricing.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'app-pricing',component:AppPricingComponent},
  {path:'team',component:TeamComponent},
  {path:'contact',component:ContactComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
