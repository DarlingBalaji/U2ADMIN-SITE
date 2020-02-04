import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: any;
  position: number;
  weight: String;
  symbol: any;
  Status: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 2, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 3, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 4, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Incompleted'},
  {position: 5, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 6, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 7, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 8, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 9, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
  {position: 10, name: '12/12/20 12:45:02', weight: 'BTC-INR', symbol: '0.00034530', Status: 'Completed'},
];




@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})


export class ExchangeComponent implements OnInit {
  cityName
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'Status'];
  displayedColumns1: string[] = [ 'name', 'weight', 'symbol', 'Status'];
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
// // City Names
// City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
//  // Choose city using select dropdown
//  changeCity(e) {
//   this.cityName.setValue(e.target.value, {
//     onlySelf: true
//   })
// }
}
