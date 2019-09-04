import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  previewPhoto = false;
  employee: Employee;
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }
  getEmployee(id: number) {
    if (id === 0) {
      this.employee == {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: '-1',
        isActive: null,
        photoPath: null
      };
    }
    else{
      this.employee=Object.assign({},this._employeeService.getEmployee(id));
    }
  }
  saveEmployee(): void {
    //const newEmployee: Employee = Object.assign({},this.employee);
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
