import { Component } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
})
export class UserContainerComponent {
  constructor(private requestService: RequestService) {}

  users!: any;

  ngOnInit() {
    this.requestService.getUsersList().subscribe((usersList) => {
      this.users = usersList;
    });
  }
}
