import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { StudentService } from './services/http/student.service';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ], 
  providers:[
    StudentService
  ]
})
export class CoreModule { }
