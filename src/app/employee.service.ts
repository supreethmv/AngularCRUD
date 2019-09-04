import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listEmployess = new BehaviorSubject<Employee[]>([
    {
      id: 1,
      name: 'Supreeth',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@gmail.com',
      dateOfBirth: new Date('10/25/1995'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/emp1.png'
    },
    {
      id: 2,
      name: 'Thinh',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1990'),
      department: '2',
      isActive: false,
      photoPath: 'assets/images/emp2.png'
    },
    {
      id: 3,
      name: 'Mathias',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1990'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/emp3.png'
    },
  ]);

  cast=this.listEmployess.asObservable();

  constructor() { }


  getEmployee(id:number): Employee{
    return this.listEmployess.value.find(e=>e.id===id);
  }

  save(employee:Employee){
    this.listEmployess.value.push(employee);
  }
}
