import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormArray, Validators,FormControl, FormGroup } from "@angular/forms";
// import { FormBuilder, Validators, } from "@angular/forms";
// import { Component } from '@angular/core';
import { FormGroupDirective, NgForm, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: any;
  symbol: string;
  View: any;
  Delete: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'AXIS Bank', weight: 'AXI0023545343652354', symbol: 'AXI001', View: 'create', Delete: 'delete_sweep'},
  {position: 2, name: 'IOB', weight: 'IOB0023545343652354', symbol: 'IOB0545', View: 'create', Delete: 'delete_sweep'},
  {position: 3, name: 'AXIS Bank', weight: 'AXI0023545343652354', symbol: 'AXI001', View: 'create', Delete: 'delete_sweep'},
  {position: 4, name: 'SBI', weight: 'AXI0023545343652354', symbol: 'SBI0337', View: 'create', Delete: 'delete_sweep'},
  {position: 5, name: 'AXIS Bank', weight: 'AXI0023545343652354', symbol: 'AXI001', View: 'create', Delete: 'delete_sweep'},
];

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.scss']
})
export class YourProfileComponent implements OnInit {
  ConfirmPassword = true;
  NewPassword = true;
  OldPassword = true;
  model:any = {};
  displayedColumns: string[] = ['position', 'name', 'weight',  'View', 'Delete'];
  dataSource = ELEMENT_DATA;
  submitted
  constructor(    public fb: FormBuilder,
    private cd: ChangeDetectorRef, private formBuilder: FormBuilder) { 
      this.myForm = this.formBuilder.group({
        Old_password:['',[Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required]
      },
      { validator: this.checkPasswords });
    }

  ngOnInit() {
  }

  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  // constructor(private ) {


  // }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

}
