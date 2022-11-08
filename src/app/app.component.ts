import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {GradesApiService} from './grades/grades-api.service';
import {Grade} from './grades/grade.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  gradesListSubs!: Subscription;
  gradesList!: Grade[];

  constructor(private gradesApi: GradesApiService) {
  }

  ngOnInit() {
    this.gradesListSubs = this.gradesApi
      .getGrades()
      .subscribe((res: Grade[]) => {
          this.gradesList = res;
        },
        console.error
      );
  }

  ngOnDestroy() {
    this.gradesListSubs.unsubscribe();
  }
}
