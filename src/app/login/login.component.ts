import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import { CommonserviceService } from '../Services/commonservice.service';
import { ActivatedRoute,NavigationEnd, Router, NavigationExtras } from '@angular/router';
import {  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model:any = {};
  userIn:Boolean = false;
resolved(captchaResponse: string) {
   console.log(`Resolved captcha with response: ${captchaResponse}`);
}
 
protected FormGroup: FormGroup;
constructor(private fb: FormBuilder, private service : CommonserviceService,   
  private toastr: ToastrService,private router: Router,  
  private route:ActivatedRoute,) {}

  ngOnInit() {
  }

  onSubmit() {
    var datas = {
      "email_ID": this.model.email,
      "Password": this.model.pass,
    }
    this.service.postfunction('users/login',datas).subscribe( res => {
      console.log(res)
      if(res.status == true) {
        this.toastr.clear();
        this.toastr.success(res.message,'Success');
        this.router.navigate(['/HomePage']);
      }
      else {
        this.toastr.clear();
        this.toastr.error(res.message,'Oops');
      }
    })
  }

}
