import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee_number: number = 1;
  name: string = "Tushar Rupani";
  constructor() { }

  ngOnInit(): void {
  }

}
