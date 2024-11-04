import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppMainComponent } from './layouts/main-layout/app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AppModule } from './app.module';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileManagerComponent } from './hrm/profile-manager/profile-manager.component';
import { DepartmentManagerComponent } from './hrm/department-manager/department-manager.component';
import { PositionManagerComponent } from './hrm/position-manager/position-manager.component';
import { LaborContractManagerComponent } from './hrm/labor-contract-manager/labor-contract-manager.component';
import { EducationLevelManagerComponent } from './hrm/education-level-manager/education-level-manager.component';
import { TimekeepingManagerComponent } from './hrm/timekeeping-manager/timekeeping-manager.component';
import { TimekeepingManagerDetailComponent } from './hrm/timekeeping-manager/timekeeping-manager-detail/timekeeping-manager-detail.component';

export const routes: Routes = [
  {
    // canActivate: [AuthGuardService],
    path: '',
    component: AppMainComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'client-template',
        loadChildren: () =>
          import('./client-template/client-template.module').then(
            (m) => m.ClientTemplateModule
          ),
      },
      {
        path: 'core',
        loadChildren: () =>
          import('./core/core.module').then((m) => m.CoreModule),
      },
      { path: 'profile-manager', component: ProfileManagerComponent },
      { path: 'department-manager', component: DepartmentManagerComponent },
      { path: 'position-manager', component: PositionManagerComponent },
      { path: 'labor-contract-manager', component: LaborContractManagerComponent },
      { path: 'education-level-manager', component: EducationLevelManagerComponent },
      { path: 'timekeeping-manager', component: TimekeepingManagerComponent },
      { path: 'timekeeping-manager-detail', component: TimekeepingManagerDetailComponent },
    ],
  },
  { path: 'error', component: AppErrorComponent },
  { path: 'access', component: AppAccessdeniedComponent },
  { path: 'notfound', component: AppNotfoundComponent },
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [{ path: '', component: AppLoginComponent }],
  },
  { path: '**', redirectTo: '/notfound' },
];
export const AppRoutes: ModuleWithProviders<AppModule> = RouterModule.forRoot(
  routes,
  { preloadingStrategy: QuicklinkStrategy }
);
