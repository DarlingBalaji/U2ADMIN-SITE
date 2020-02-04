import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient, HttpEventType } from '@angular/common/http';
 

export interface PeriodicElement {
  name: any;
  position: number;
  weight: any;
  symbol: any;
  Status: any;
  Fee: any;
}

// const ELEMENT_DATA1: PeriodicElement[] = [
//   {position: 1, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'Bank'},
//   {position: 2, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'Bank'},
//   {position: 3, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
//   {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal' },
//   {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal' },
//   {position: 5, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'PayPal'},
//   {position: 6, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'PayPal'},
//   {position: 7, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'GooglePay'},
//   {position: 8, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'GooglePay'},
//   {position: 9, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
//   {position: 10, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal'},
// ];


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
  {position: 2, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
  {position: 3, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
  {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal' },
  {position: 4, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal' },
  {position: 5, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'PayPal'},
  {position: 6, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'PayPal'},
  {position: 7, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'GooglePay'},
  {position: 8, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'GooglePay'},
  {position: 9, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Completed', Fee: 'Bank'},
  {position: 10, name: '12/12/20 12:45:02', weight: '354.00 BTC', symbol: 'ESD345ID', Status: 'Incompleted', Fee: 'PayPal'},
];

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.component.html',
  styleUrls: ['./deposit-withdraw.component.scss']
})
export class DepositWithdrawComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'Fee','weight', 'symbol', 'Status', ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  isShow;isShow1;
  model:any = {};
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginator2') paginator2: MatPaginator;
  // constructor() { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource1.paginator = this.paginator;
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


  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor(private http: HttpClient) { }
  
  fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
  }
 
preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}

}
