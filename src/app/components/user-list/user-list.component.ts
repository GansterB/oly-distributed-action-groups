import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsersService } from '../../services/users.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-list',
  imports: [
    MatSidenavModule,
    MatButtonModule,
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  constructor(
    public userServ: UsersService
  ) { }

}
