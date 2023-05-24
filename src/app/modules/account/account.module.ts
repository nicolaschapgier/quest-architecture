import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountHomeComponent } from './pages/account-home/account-home.component';
import { UsersContainerComponent } from './components/feature/users-container/users-container.component';
import { UserRandomComponent } from './components/ui/user-random/user-random.component';


@NgModule({
  declarations: [
    AccountHomeComponent,
    UsersContainerComponent,
    UserRandomComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
