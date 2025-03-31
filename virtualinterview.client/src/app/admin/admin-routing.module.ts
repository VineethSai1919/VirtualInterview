import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RolesComponent } from './roles/roles.component';

const routes=[
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'roles', component: RolesComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
