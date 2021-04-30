import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/http/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  students$: Observable<Student[]>;
  displayedColumns: string[]= ['id', 'firstName', 'lastName', 'birthYear','class','delete'];

  constructor(private _studentService: StudentService, private _router:Router) { }

  ngOnInit(): void {
    this.students$ = this._studentService.get();
  }
  goToForm(){
    console.log("toot");
    this._router.navigateByUrl("students-form");
  }

  deleteOne(id){
    this._studentService.deleteOne(id).subscribe(next=>{
      console.log("Student id:", next);
      //this._router.navigateByUrl("students");
    });
  }
  deleteAll(){
    this._studentService.deleteAll().subscribe(next=>{
      console.log("Student id:", next);
    });
  }
}
