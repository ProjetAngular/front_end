import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../../models/student';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StudentService {

endPoint: string = environment.studentEndPoint;

  constructor(private _httpClient: HttpClient) {

   }

  get(): Observable<Student[]>{
    return this._httpClient.get<Student[]>(this.endPoint)
  }

  post(student:Student): Observable<Student>{
    return this._httpClient.post<Student>(this.endPoint , student)
  }

  deleteOne(id): Observable<Student>{
    return this._httpClient.delete<Student>(this.endPoint+"/"+id)
  }
  deleteAll(): Observable<Student>{
    return this._httpClient.delete<Student>(this.endPoint)
  }

}
