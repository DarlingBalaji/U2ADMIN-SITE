import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  ol: string;
  vol: number;
  change: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})



export class HomepageComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'ol', 'vol', 'change'];
  dataSource = ELEMENT_DATA;
  selectedOption1 = "Dollor";
  SelectedOption = "Bitcoin ( BTC )"
  Inverse = "";
  demo;
  demo1;
  constructor() { }

  ngOnInit() {
    console.log(this.SelectedOption, this.selectedOption1)
  }

  Currency = [ {name:'Lite Coin ( LTC )'} , { name: 'B'} ]

  Change(val){
    this.selectedOption1 = val;
  }
  Change1(val1){
    this.SelectedOption = val1;
  }

  ChangeInverse(demo,demo1){
    // this.selectedOption1 == this.SelectedOption;
    // console.log(this.SelectedOption, this.selectedOption1)
    // // console.log(this.Inverse)
    // this.Inverse ==this.selectedOption1;
    // this.SelectedOption == this.Inverse;
    // console.log(this.selectedOption1, this.SelectedOption)
    // this.SelectedOption = this.Inverse;
    this.demo1=demo;
    this.demo=demo1;
  }


}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'BTC', weight: '$10.079', symbol: '0.05%', ol: '0.05%', vol: 23833, change: 'assets/images/grahp3.png'},
  {position: 2, name: 'Litecoin', weight: '$37.079', symbol: '0.03%', ol: '0.05%', vol: 23833, change: 'assets/images/graph1.png'},
  {position: 3, name: 'Ethereum', weight: '$75.079', symbol: '0.05%', ol: '0.05%', vol: 23833, change: 'assets/images/graph4.png'},
  // {position: 4, name: 'Zcash', weight: '$54.079', symbol: '0.25%', ol: '0.05%', vol: 23833, change: 'assets/images/grahp3.png'},
  // {position: 5, name: 'Dash', weight: '$34.79', symbol: '0.09%', ol: '0.05%', vol: 23833, change: 'assets/images/graph2.png'},
  // {position: 6, name: 'Ripple', weight: '$56.79', symbol: '0.07%', ol: '0.05%', vol: 23833, change: 'assets/images/graph1.png'},
  // {position: 7, name: 'Menero', weight: '$90.079', symbol: '0.03%', ol: '0.05%', vol: 23833, change: 'assets/images/grahp3.png'},
  // {position: 8, name: 'Bitcoin cash', weight: '$32.79', symbol: '0.04%', ol: '0.05%', vol: 23833, change: 'assets/images/graph4.png'},
  // {position: 9, name: 'NEO', weight: '$45.79', symbol: '0.05%' ,ol: '0.07%', vol: 23833, change: 'assets/images/graph1.png'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', ol: 'H',vol: 23833, change: 'img'},
];


