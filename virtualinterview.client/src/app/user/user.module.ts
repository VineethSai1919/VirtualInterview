import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { VirtualInterviewInstructionComponent } from './virtual-interview-instruction/virtual-interview-instruction.component';
import { UserNavMenuComponent } from './user-nav-menu/user-nav-menu.component';
import { VirtualInterviewComponent } from './virtual-interview/virtual-interview.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    UserComponent,
    VirtualInterviewInstructionComponent,
    UserNavMenuComponent,
    VirtualInterviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    TableModule,
    CheckboxModule,
    ScrollPanelModule,
    AccordionModule,
    SidebarModule
  ]
})
export class UserModule { }
