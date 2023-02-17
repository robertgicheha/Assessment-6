import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentBalance'
})
export class StudentBalancePipe implements PipeTransform {
  transform(students: any[], balance: string): any[] {
    if (balance === 'positive') {
      return students.filter(student => student.balance > 0);
    } else if (balance === 'zero') {
      return students.filter(student => student.balance === 0);
    } else {
      return students;
    }
  }
}
