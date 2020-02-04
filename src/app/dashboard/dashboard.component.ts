import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: any;
  symbol: string;
  View: any;
  Delete: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '28/01/2020 , 18:55:60', weight: '192.168.2.174', symbol: 'Chrome 75', View: 'create', Delete: 'India'},
  {position: 2, name: '28/01/2020 , 18:55:60', weight: '192.168.2.174', symbol: 'Chrome 75', View: 'create', Delete: 'India'},
  {position: 3, name: '28/01/2020 , 18:55:60', weight: '192.168.2.174', symbol: 'Chrome 75', View: 'create', Delete: 'India'},
  {position: 4, name: '28/01/2020 , 18:55:60', weight: '192.168.2.174', symbol: 'Chrome 75', View: 'create', Delete: 'India'},
  {position: 5, name: '28/01/2020 , 18:55:60', weight: '192.168.2.174', symbol: 'Chrome 75', View: 'create', Delete: 'IndiaIndiaIndiaIndiaIndiaIndia'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight',  'View', 'Delete'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
