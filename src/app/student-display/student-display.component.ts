import { Component, OnInit} from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit  {
  students: any[] = [];
  newBalance!: number;
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.newBalance = 0;
  }

  hasMoreBalance(student: any) {
    return student.balance > 0;
  }
  updateBalance(students: any) {
    this.studentService.updateBalance(students, this.newBalance);
  }
  
}
