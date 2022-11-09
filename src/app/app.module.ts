import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesApiService } from './groups/grades/grades-api.service';
import { GradesComponent } from './groups/grades/grades.component';
import { AssessmentComponent } from './groups/assessment/assessment.component';
import { PlanningComponent } from './groups/planning/planning.component';
import { OverallProgressComponent } from './groups/overall-progress/overall-progress.component';
import { DashboardComponent } from './groups/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AssessmentComponent } from './groups/assessment/assessment.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    AssessmentComponent,
    PlanningComponent,
    OverallProgressComponent,
    DashboardComponent,
    // AssessmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    // AppRoutingModule
  ],
  providers: [GradesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
