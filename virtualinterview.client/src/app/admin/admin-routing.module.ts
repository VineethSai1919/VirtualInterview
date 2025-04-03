import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RolesComponent } from './roles/roles.component';
import { UsersComponent } from './users/users.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from '../Shared/authguard.service';
import { SkillsComponent } from './skills/skills.component';
import { QuestionsComponent } from './questions/questions.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes=[
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'roles', component: RolesComponent, canActivate:[AuthGuard] },
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
      { path: 'skills', component: SkillsComponent,canActivate:[AuthGuard] },
      { path: 'questions', component: QuestionsComponent,canActivate:[AuthGuard] },
      { path: 'schedules', component: SchedulesComponent,canActivate:[AuthGuard] },
      { path: 'adminlogin', component: AdminloginComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
