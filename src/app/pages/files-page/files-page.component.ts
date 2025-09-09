import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-files-page',
  imports: [],
  templateUrl: './files-page.component.html',
  styleUrl: './files-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesPageComponent {}
