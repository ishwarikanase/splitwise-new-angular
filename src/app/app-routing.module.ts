import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { NotAuthGuardGuard } from './guards/not-auth-guard.guard';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { ExpensesComponent } from './expenses/expenses.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'login', component: LogInComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [NotAuthGuardGuard] },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [NotAuthGuardGuard], children: [
      { path: '', component: MainDashboardComponent, canActivate: [NotAuthGuardGuard] },
      { path: 'recent', component: ActivityComponent, canActivate: [NotAuthGuardGuard] },
      { path: 'expenses', component: ExpensesComponent, canActivate: [NotAuthGuardGuard] },


    ]
  },
  { path: 'friends', component: FriendsComponent, canActivate: [NotAuthGuardGuard] },
  { path: 'groups', component: GroupsComponent, canActivate: [NotAuthGuardGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
