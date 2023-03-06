import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ListComponent } from './admin/list/list.component';
//import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
 {path:'admin',loadChildren:()=>import('./admin/admin.module').
 then(mod=>mod.AdminModule)},
 {path:'user',loadChildren:()=>import('./user/user.module').
 then(mod=>mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
