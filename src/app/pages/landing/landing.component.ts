import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UsersService } from '../../services/users.service';
import { UserListComponent } from "../../components/user-list/user-list.component";

type FileEvent = Event & {
  target: EventTarget & { files?: File[] } | null
};

@Component({
  selector: 'app-landing',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    UserListComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {

  selectedFile?: File;

  constructor(public userServ: UsersService) { }

  async onFileSelected(e: FileEvent) {
    if (e.target?.files?.length) {
      this.selectedFile = e.target.files[0];

      const text = await this.selectedFile.text();
      const emails = text
        .split(/[ ,\t\r\n]+/)
        .filter(e => e);

      this.userServ.addUsers(emails);
    }
  }
}
