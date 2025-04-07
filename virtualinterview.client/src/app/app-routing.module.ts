import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Shared/authguard.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate:[AuthGuard] },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'feedback/:scheduleid', component: FeedbackComponent },
  { path: '', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
