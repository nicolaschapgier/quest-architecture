import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UsersListComponent } from './components/ui/users-list/users-list.component';
import { UserContainerComponent } from './components/feature/user-container/user-container.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    UsersListComponent,
    UserContainerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
