import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

type FileEvent = Event & {
  target: EventTarget & { files?: File[] } | null
};

@Component({
  selector: 'app-landing',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {

  selectedFile?: File;

  async onFileSelected(e: FileEvent) {
    if (e.target?.files?.length) {
      this.selectedFile = e.target.files[0];

      const text = await this.selectedFile.text();
      const emails = text
        .split(/[ ,\r\n]+/)
        .filter(e => e);

      console.log('email list:', emails);
    }
  }
}
