import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { name: 'Marcus',  id:'1', balance: 0 },
    { name: 'Joanh',  id:'9', balance: 0 },
    { name: 'Edith',  id:'8', balance: 0 },
    { name: 'Brian',  id:'6', balance: 100 },
    { name: 'Charles', id:'3', balance: 50 },
    { name: 'David', id:'4', balance: 75 }
  ];
  constructor() { }

  getStudents() {
    return this.students;
  }
  updateBalance(student: any, newBalance: number) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students[index].balance = newBalance;
    }
  }
}