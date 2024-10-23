import { Component } from '@angular/core';

export interface PeriodicElement{
  position:number;
  Auto_Tester:string;
  Manual_Tester:string;
  BA:string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,Auto_Tester:"Creates JMX files of respective POSTMAN collection",Manual_Tester:"Prepare TestData ",BA:"Create a TestPlan and upload DOU of Test Scenarios"},
  {position:2,Auto_Tester:"Integrates JIRA XRAY plugin ",Manual_Tester:"Creates TestCases  and upload CSV file on JIRA",BA:"Verify and approve the test cases"},
  {position:3,Auto_Tester:"Creates JENKINS JOB",Manual_Tester:"Executes JENKINS JOB",BA:"Verify and Reject the test cases"}
  
];
@Component({
  selector: 'app-roles-involved',
  templateUrl: './roles-involved.component.html',
  styleUrls: ['./roles-involved.component.css']
})
export class RolesInvolvedComponent {
  
  displayedColumns: string[] = ['position', 'Auto_Tester', 'Manual_Tester', 'BA'];
  dataSource = ELEMENT_DATA;

}
