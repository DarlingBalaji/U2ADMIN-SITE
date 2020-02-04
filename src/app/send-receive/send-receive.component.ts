import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement {
  name: any;
  position: number;
  weight: any;
  symbol: any;
  Status: any;
}
// export interface PeriodicElement1 {
//   name: any;
//   position: number;
//   weight: any;
//   symbol: any;
//   Status: any;
// }
// const ELEMENT_DATA1: PeriodicElement1[] = [
//   {position: 1, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 2, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 3, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Incompleted'},
//   {position: 5, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 6, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 7, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 8, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 9, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
//   {position: 10, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'A56dfGfmd05VSHfH', Status: 'Completed'},
// ];

const ELEMENT_DATA: PeriodicElement[] = [
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
  selector: 'app-send-receive',
  templateUrl: './send-receive.component.html',
  styleUrls: ['./send-receive.component.scss']
})
export class SendReceiveComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'weight', 'symbol', 'Status'];
  displayedColumns1: string[] = [ 'name', 'weight', 'symbol', 'Status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  model:any = {};
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  constructor(private _clipboardService: ClipboardService,
    private toastr: ToastrService) {}

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource1.paginator1 = this.paginator1;
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

  // Copy String 
  copy(text: string){
    this._clipboardService.copyFromContent(text);
  }
  CopyText(){
    this.toastr.success('Address Copied');
    console.log("Hello")
  }
  
}
