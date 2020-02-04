import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExchangeComponent } from '../exchange/exchange.component';
import { SendReceiveComponent } from '../send-receive/send-receive.component';
import { SendReceivetComponent } from '../send-receivet/send-receivet.component';
import { YourProfileComponent } from '../your-profile/your-profile.component';
import { DepositWithdrawComponent } from '../deposit-withdraw/deposit-withdraw.component';
import { SupportComponent } from '../support/support.component';
import { TransactionHistoryComponent } from '../transaction-history/transaction-history.component';

export const UserPanelRouter: Routes = [

    {
        path: '',
        redirectTo: 'Dashboard',
        pathMatch: 'full',
      },
    { path: 'Dashboard' ,component: DashboardComponent },
    { path: 'Exchange' ,component: ExchangeComponent },
    { path: 'Send' ,component: SendReceiveComponent },
    { path: 'Receive' ,component: SendReceivetComponent },
    { path: 'Settings' ,component: YourProfileComponent },
    { path: 'Deposit' ,component: DepositWithdrawComponent },
    { path: 'Support' ,component: SupportComponent },
    { path: 'TransactionHistory' ,component: TransactionHistoryComponent },

];
