import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: any;
  position: number;
  weight: any;
  symbol: any;
  Status: any;
}


const ELEMENT_DATA1: PeriodicElement[] = [
  {position: 1, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 2, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 3, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Incompleted'},
  {position: 5, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 6, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 7, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 8, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 9, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
  {position: 10, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
];


@Component({
  selector: 'app-send-receivet',
  templateUrl: './send-receivet.component.html',
  styleUrls: ['./send-receivet.component.scss']
})
export class SendReceivetComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'Status'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA1);
  isShow;isShow1;
  model:any = {};
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource1.paginator = this.paginator;
  }
  NextStep2(){
    this.isShow = !this.isShow
  }
  NextStep1(){
    this.isShow1 = !this.isShow1
  }
}
