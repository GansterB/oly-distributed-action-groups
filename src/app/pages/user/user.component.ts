import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UsersService } from '../../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    UserListComponent,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  readonly id = input.required<number>();

  constructor(
    public userServ: UsersService
  ) { }

}
