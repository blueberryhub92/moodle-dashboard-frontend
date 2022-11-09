import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Grade } from './grade.model';
import { GradesApiService } from './grades-api.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

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
