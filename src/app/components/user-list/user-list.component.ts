import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersService } from '../../services/users.service';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(
    public router: Router,
    public userServ: UsersService,
  ) { }

}
