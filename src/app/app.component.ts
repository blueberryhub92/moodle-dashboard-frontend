// import {Component, OnInit, OnDestroy} from '@angular/core';
// import {Subscription} from 'rxjs';
// import {GradesApiService} from './groups/grades/grades-api.service';
// import {Grade} from './groups/grades/grade.model';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit, OnDestroy {
//   title = 'app';
//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   // gradesListSubs!: Subscription;
//   // gradesList!: Grade[];

//   // constructor(private gradesApi: GradesApiService) {
//   // }

//   // ngOnInit() {
//   //   this.gradesListSubs = this.gradesApi
//   //     .getGrades()
//   //     .subscribe((res: Grade[]) => {
//   //         this.gradesList = res;
//   //       },
//   //       console.error
//   //     );
//   // }

//   // ngOnDestroy() {
//   //   this.gradesListSubs.unsubscribe();
//   // }

// }
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moodle-dashboard';

  @ViewChild(MatSidenav) 
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {

  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

}