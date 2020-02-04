import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: any;
  position: String;
  weight: String;
  symbol: any;
  Status: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Sell', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Sell', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Incompleted'},
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Sell', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Sell', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 'Buy', name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
];


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  cityName
  displayedColumns: string[] = [ 'position','name', 'weight', 'symbol', 'Status'];
  displayedColumns1: string[] = [ 'name','position', 'weight', 'symbol', 'Status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  model:any = {};
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  constructor() { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource1.paginator = this.paginator2;
  }
  
  _setDataSource(indexNumber) {
    setTimeout(() => {
      switch (indexNumber) {
        case 0:
          !this.dataSource.paginator ? this.dataSource.paginator = this.paginator : null;
          break;
        case 1:
          !this.dataSource1.paginator ? this.dataSource1.paginator = this.paginator2 : null;
      }
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}