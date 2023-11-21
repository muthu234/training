import { CrudFrondendComponent } from './crud-frondend/crud-frondend.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'add',component:AddComponent},
  {path:'home',component:CrudFrondendComponent},
  {path:'view',component:ViewComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
