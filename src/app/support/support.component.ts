import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: any;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: '29/2/2020', name: 'Selling Coin Error', weight: 'USD0011', symbol: 'Open'},
  {position: '2/3/2020', name: 'Upload Coin Error', weight: 'USD0012', symbol: 'Open'},
  {position: '8/1/2020', name: 'Login Error', weight: 'USD0013', symbol: 'Open'},
  {position: '3/2/2020', name: 'Profile Error', weight: 'USD0014', symbol: 'Closed'},
  {position: '24/10/2020', name: 'Upload Error', weight: 'USD0015', symbol: 'Open'},
  {position: '19/2/2020', name: 'Selling Coin Error', weight: 'USD0016', symbol: 'Closed'},
  {position: '9/12/2020', name: 'Buy Coin Error', weight: 'USD0017', symbol: 'Open'},
  {position: '2/2/2020', name: 'Login Error', weight: 'USD0018', symbol: 'Closed'},

];

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  // dataSource = ELEMENT_DATA;
  model:any = {};
 

  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
