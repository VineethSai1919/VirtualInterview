import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminNavMenuComponent } from './admin-nav-menu/admin-nav-menu.component';
import { RolesComponent } from './roles/roles.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { UsersComponent } from './users/users.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SkillsComponent } from './skills/skills.component';
import { QuestionsComponent } from './questions/questions.component';
import { SsmleditorComponent } from './questions/ssmleditor/ssmleditor.component';
import { CheckboxModule } from 'primeng/checkbox';
import { SchedulesComponent } from './schedules/schedules.component';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { StepsModule } from 'primeng/steps';
import { EditorModule } from 'primeng/editor';
import { SidebarModule } from 'primeng/sidebar';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TreeModule } from 'primeng/tree';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [
    AdminComponent,
    SkillsComponent,
    AdminNavMenuComponent,
    RolesComponent,
    UsersComponent,
    AdminloginComponent,
    QuestionsComponent,
    SsmleditorComponent,
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    ChipsModule,
    AdminRoutingModule,
    FormsModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    PaginatorModule,
    ToastModule,
    InputTextModule,
    AdminRoutingModule,
    CheckboxModule,
    CalendarModule,
    DialogModule,
    MultiSelectModule,
    InputTextModule,
    AutoCompleteModule,
    RadioButtonModule,
    FormsModule,
    PanelModule,
    ProgressBarModule,
    TooltipModule,
    DropdownModule,
    StepsModule,
    ReactiveFormsModule,
    EditorModule,
    SidebarModule,
    SplitButtonModule,
    InputGroupModule,
    MenuModule,
    InputGroupAddonModule,
    TreeModule,
  ],
  exports: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
