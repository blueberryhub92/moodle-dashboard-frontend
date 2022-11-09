import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {API_URL} from '../../env';
import {Grade} from './grade.model';

@Injectable()
export class GradesApiService {

  constructor(private http: HttpClient) {
  }
  // GET list of public, future events
  getGrades(): Observable<Grade[]>{
    return this.http.get<Grade[]>(`${API_URL}/api`);
    }
  }