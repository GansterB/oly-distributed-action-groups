import { Component, input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersService } from '../../services/users.service';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  readonly id = input<number>();

  constructor(
    public router: Router,
    public userServ: UsersService,
  ) { }

}
