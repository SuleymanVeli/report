import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { ResultQueryComponent } from './view_component/result-query/result-query.component';
import { AdminComponent } from './view_component/admin/admin.component';
import { HomeComponent } from './view_component/home/home.component';
import { LoginComponent } from './view_component/login/login.component';
import { DashboardComponent } from './layout_componens/dashboard/dashboard.component';
import { LoginGuard } from './view_component/login/login.guard';
import { RoleGuard } from './view_component/login/role.guard';
import { AdminDatabaseComponent } from './admin_components/admin-database/admin-database.component';
import { AdminUserComponent } from './admin_components/admin-user/admin-user.component';
import { AdminHomeComponent } from './admin_components/admin-home/admin-home.component';
import { AdminReportComponent } from './admin_components/admin-report/admin-report.component';


const routes: Routes = [
  {
    path:'hesabat',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: ':reportId',
        component: ResultQueryComponent
      },
      {
        path: '',
        pathMatch:'full',
        canActivate: [LoginGuard],
        component: HomeComponent
      }]        
  },
  {
    path:'admin',
    component: DashboardComponent,
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    } ,
    children: [
      {
        path: 'database',
        component: AdminDatabaseComponent
      },   
      {
        path: 'user',
        component: AdminUserComponent
      },   
      {
        path: 'home',
        component: AdminHomeComponent
      },   
      {
        path: 'report',
        component: AdminReportComponent
      },   
      {
        path: '',
        pathMatch:'full',
        component: AdminComponent
      }]        
  },  
  {path:'login',component : LoginComponent},
  {path:'register',component : LoginComponent},
  {path:'',redirectTo: 'hesabat',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

