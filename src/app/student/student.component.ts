import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../core/services/http/student.service';
import {Student} from '../core/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students$: Observable<Student[]>;

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();

  }

}
