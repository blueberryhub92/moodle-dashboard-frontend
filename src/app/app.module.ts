import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesApiService } from './grades/grades-api.service';
// import { AssessmentComponent } from './groups/assessment/assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    // AssessmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [GradesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
