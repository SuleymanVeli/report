import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './layout_componens/header/header.component';
import { FooterComponent } from './layout_componens/footer/footer.component';
import { NavComponent } from './layout_componens/nav/nav.component';
import { ResultQueryComponent } from './view_component/result-query/result-query.component';
import { AdminComponent } from './view_component/admin/admin.component';
import { HomeComponent } from './view_component/home/home.component';
import { LoginComponent } from './view_component/login/login.component';
import { DashboardComponent } from './layout_componens/dashboard/dashboard.component';
import { FormsModule }   from '@angular/forms'
import { LoginGuard } from './view_component/login/login.guard';
import { RoleGuard } from './view_component/login/role.guard';
import { AreaChartComponent } from './view_component/area-chart/area-chart.component';
import { PieChartComponent } from './view_component/pie-chart/pie-chart.component';
import { DonutChartComponent } from './view_component/donut-chart/donut-chart.component';
import { AdminUserComponent } from './admin_components/admin-user/admin-user.component';
import { AdminReportComponent } from './admin_components/admin-report/admin-report.component';
import { AdminHomeComponent } from './admin_components/admin-home/admin-home.component';
import { AdminDatabaseComponent } from './admin_components/admin-database/admin-database.component';
import { TableComponent } from './view_component/table/table.component';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavComponent,
      ResultQueryComponent,
      AdminComponent,
      HomeComponent,
      LoginComponent,
      DashboardComponent,
      AreaChartComponent,
      PieChartComponent,
      DonutChartComponent,
      AdminUserComponent,
      AdminReportComponent,
      AdminHomeComponent,
      AdminDatabaseComponent,
      TableComponent,
   ],
   imports: [
      NgApexchartsModule,
      BrowserModule,
      AppRoutingModule,
      AngularFontAwesomeModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [LoginGuard,RoleGuard],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
