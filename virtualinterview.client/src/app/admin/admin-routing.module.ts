import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from '../Shared/authguard.service';

const routes=[
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'roles', component: RolesComponent, canActivate:[AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate:[AuthGuard] },
      { path: 'adminlogin', component: AdminloginComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
