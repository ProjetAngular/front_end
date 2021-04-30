import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from '../core/services/http/student.service';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentComponent } from './student.component';
import {StudentFormComponent} from './pages/student-form/student-form.component'
  import { from } from 'rxjs';

const routes: Routes = [
  {
  path:'',component: StudentComponent,
  children:[
    
    {
      path:'', redirectTo: 'students', pathMatch: 'full'
    },
    {
      path:'students-form',component: StudentFormComponent
      ,
    },
    {
      path:'students', component: StudentListComponent
    },
    {
      path:'**', component: NotFoundComponent
    }
  ]
  },
  {
    path:'**',component: NotFoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
