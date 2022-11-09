import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './groups/assessment/assessment.component';
import { DashboardComponent } from './groups/dashboard/dashboard.component';
import { GradesComponent } from './groups/grades/grades.component';
import { OverallProgressComponent } from './groups/overall-progress/overall-progress.component';
import { PlanningComponent } from './groups/planning/planning.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'grades', component: GradesComponent},
  {path: 'overall-progress', component: OverallProgressComponent},
  {path: 'assessment', component: AssessmentComponent},
  {path: 'planning', component: PlanningComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
