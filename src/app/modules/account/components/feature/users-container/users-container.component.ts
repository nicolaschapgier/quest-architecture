import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
})
export class UsersContainerComponent {
  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {}

  usersList!: any;
  userId!: number;
  user!: any;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = parseInt(params['id']);
    });

    this.requestService.getUsersList().subscribe((usersList) => {
      this.usersList = usersList;
      for (let user of this.usersList) {
        if (user.id == this.userId) {
          this.user = user;
        }
      }
    });
  }
}
