import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavMenuComponent } from './admin-nav-menu/admin-nav-menu.component';
import { RolesComponent } from './roles/roles.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminComponent,
    AdminNavMenuComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule.forChild([
      {
        path: '', component: AdminComponent,
        children: [
          { path: 'roles', component: RolesComponent },

        ]
      }
    ])
  ]
})
export class AdminModule { }
