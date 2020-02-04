import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import {  PasswordValidator, ParentErrorStateMatcher } from 'src/app/validators';
// import { HttpClient, HttpEventType } from '@angular/common/http';
import { CommonserviceService } from '../Services/commonservice.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  model:any = {};
  userIn:Boolean = false;
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

    
  constructor(private fb: FormBuilder, private service : CommonserviceService,   
    private toastr: ToastrService,private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    var datas = {
      "email_ID": this.model.email,
      // "Password": this.model.pass,
    }
    this.service.postfunction('users/forgetpassword',datas).subscribe( res => {
      console.log(res)
      if(res.status == true) {
        this.toastr.clear();
        this.toastr.success(res.message,'Success');
        // this.router.navigate(['/HomePage']);
      }
      else {
        this.toastr.clear();
        this.toastr.error(res.message,'Oops');
      }
    })
  }

}
