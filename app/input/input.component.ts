import { Component } from '@angular/core';


export interface PeriodicElement{
  position:number;
  DATA:string;
  

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position:1,DATA:". JAVA – 21 or above"},
  {position:2,DATA:"Jenkins user credentials: Will be shared by Automation Team"},
  {position:3,DATA:"JIRA access of respective Project"},
  {position:4,DATA:"XRAY - Client -ID and Secret Key"}

  
];
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
 
  
    displayedColumns: string[] = ['position', 'DATA'];
    dataSource = ELEMENT_DATA;

}
