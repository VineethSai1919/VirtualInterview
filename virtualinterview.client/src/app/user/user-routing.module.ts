import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthGuard } from '../Shared/authguard.service';
import { VirtualInterviewInstructionComponent } from './virtual-interview-instruction/virtual-interview-instruction.component';
import { VirtualInterviewComponent } from './virtual-interview/virtual-interview.component';

const routes: Routes = [{
  path: '', component: UserComponent,
  children: [
    { path: 'virtualInterviewInstruction', component: VirtualInterviewInstructionComponent, canActivate: [AuthGuard] },
    { path: 'virtualInterview', component: VirtualInterviewComponent, canActivate: [AuthGuard] }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
