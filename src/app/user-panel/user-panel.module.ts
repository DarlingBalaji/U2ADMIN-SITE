import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPanelRouter } from './user-panel.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExchangeComponent } from '../exchange/exchange.component';
import { SendReceiveComponent } from '../send-receive/send-receive.component';
import { SendReceivetComponent } from '../send-receivet/send-receivet.component';
import { YourProfileComponent } from '../your-profile/your-profile.component';
import { DepositWithdrawComponent } from '../deposit-withdraw/deposit-withdraw.component';
import { SupportComponent } from '../support/support.component';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';

//External Section
// import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from 'ngx-clipboard';

import { MatPaginatorModule,
    MatChipsModule, MatExpansionModule,
    MatSlideToggleModule,  MatCheckboxModule,
     MatBadgeModule} from '@angular/material';
import {MatTableModule, } from '@angular/material/table';




import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,MatIconModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserPanelRouter),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,MatPaginatorModule,
    MatChipsModule, MatExpansionModule,
    MatSlideToggleModule,  MatCheckboxModule,
     MatBadgeModule,MatTableModule,
    MatTooltipModule,MatIconModule,ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    ExchangeComponent,
    SendReceiveComponent,
    SendReceivetComponent,
    YourProfileComponent,
    DepositWithdrawComponent,
    SupportComponent,
    TransactionHistoryComponent,

  ]
})

export class UserPanelModule {}
