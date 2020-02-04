import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import {  PasswordValidator, ParentErrorStateMatcher } from 'src/app/validators';
// import { HttpClient, HttpEventType } from '@angular/common/http';
import { CommonserviceService } from '../Services/commonservice.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  model:any = {};
  userIn:Boolean = false;
  accountDetailsForm: FormGroup; 
  matching_passwords_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  hide = true;
  account_validation_messages = {
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],

    }
    
    constructor(private fb: FormBuilder, private service : CommonserviceService,   
                private toastr: ToastrService,private router: Router) {}
    
                ngOnInit() {
                  this.createForms();
                }
              
                createForms(){
                      // matching passwords validation
                      this.matching_passwords_group = new FormGroup({
                        password: new FormControl('', Validators.compose([
                          Validators.minLength(5),
                          Validators.required,
                          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9_.$@$!%*?&+-]+$')
                        ])),
                        confirm_password: new FormControl('', Validators.required)
                      }, (formGroup: FormGroup) => {
                        return PasswordValidator.areEqual(formGroup);
                      });
              
                   this.accountDetailsForm = this.fb.group({
                    matching_passwords: this.matching_passwords_group,
                   })
                }
                  onSubmitAccountDetails(value){
                  var datas = {
                    // "username": this.accountDetailsForm.value.username,
                    // "email_ID": this.accountDetailsForm.value.email,
                    "Password": this.matching_passwords_group.value.password,
                  }
                  // this.toastr.success("hello")
                  console.log(this.accountDetailsForm.value)
                  this.service.postfunction('users/register',datas).subscribe( res => {
                    if(res.status == true) {
                      this.toastr.clear();
                      this.toastr.success(res.message,'Account Created Successfully!!!');
                      this.toastr.success('Check Your Mail to Login With As!!!!');
                      // this.router.navigate(['/HomePage']);
                    }
                    else {
                      this.toastr.clear();
                      this.toastr.error(res.message,'Oops');
                    }
                  })
                this.accountDetailsForm.reset(this.accountDetailsForm)
                }

}
