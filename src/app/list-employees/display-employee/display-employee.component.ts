import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee:Employee;

  constructor(private _router: Router, private _route:ActivatedRoute) { }

  ngOnInit() {
  }

  editEmployee(){
    this._router.navigate(['/edit',this.employee.id]);
  }



}