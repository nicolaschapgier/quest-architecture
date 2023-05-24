import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-random',
  templateUrl: './user-random.component.html',
  styleUrls: ['./user-random.component.scss'],
})
export class UserRandomComponent {
  @Input() user: any;
}
