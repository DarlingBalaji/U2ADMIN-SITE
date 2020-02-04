import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
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


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path:'HomePage' ,component: HomepageComponent },
  { path: 'FAQ' ,component: FAQComponent },
  { path: 'AboutUs' ,component: AboutUsComponent },
  { path: '404' ,component: ErrorPageComponent },
  { path: 'ContactUs' ,component: ContactUsComponent },
  { path: 'Privacy_Policy' ,component: PrivacyPolicyComponent },
  { path: 'Login' ,component: LoginComponent },
  { path: 'Signup' ,component: SignupComponent },
  { path: 'ForgetPassword' ,component: ForgetPasswordComponent },
  { path: 'ResetPassword' ,component: ResetPasswordComponent },
  { path: 'Under_Maintanences' ,component: UnderMaintancesComponent },
  { path: 'Teams&Condition' ,component: TermConditionComponent },
  { path: 'DashboardNew' ,component: NewDashboardComponent },
  { path: 'News' ,component: NewsDetailsPageComponent },

  {
    path: '',
    component: UserPanelComponent,
    children: [{
      path: '',
      loadChildren: './user-panel/user-panel.module#UserPanelModule'
    }]
  }
];

@NgModule({
  imports: [CommonModule, BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
