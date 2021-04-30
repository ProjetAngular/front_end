import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../models/studen';

@Injectable()
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Student[]> {
    return this._httpClient.get<Student[]>("http://localhost:3000/students");
  }
  
}