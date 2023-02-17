import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  students = {
    name: '',
    Id: '',
    balance: 0
  }
  
  onSubmit() {
 
    console.log(this.students);



};


}
