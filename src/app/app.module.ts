import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
//External Section
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { RecaptchaModule } from 'ng-recaptcha';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';

// Material Section
import {MatButtonModule, MatFormFieldModule, MatPaginatorModule,
        MatChipsModule, MatExpansionModule, MatSelectModule,
        MatSlideToggleModule, MatInputModule, MatCheckboxModule,
        MatIconModule, MatBadgeModule} from '@angular/material';
import {MatTableModule, } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Components Section
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FAQComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { UnderMaintancesComponent } from './under-maintances/under-maintances.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NewDashboardComponent } from './new-dashboard/new-dashboard.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { NewsDetailsPageComponent } from './news-details-page/news-details-page.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    DashboardHeaderComponent,
    SidenavComponent,
    FAQComponent,
    AboutUsComponent,
    ErrorPageComponent,
    ContactUsComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    TermConditionComponent,
    UnderMaintancesComponent,
    PrivacyPolicyComponent,
    NewDashboardComponent,
    UserPanelComponent,
    NewsDetailsPageComponent,
    

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatBadgeModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatChipsModule,
    NgMatSearchBarModule,
    FlexLayoutModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    ToastrModule.forRoot(),
    // ComponentsModule,
    RouterModule,
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
