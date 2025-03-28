import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavMenuComponent } from './admin-nav-menu/admin-nav-menu.component';
import { RolesComponent } from './roles/roles.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';


@NgModule({
  declarations: [
    AdminComponent,
    AdminNavMenuComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    ToastModule,
    InputTextModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
