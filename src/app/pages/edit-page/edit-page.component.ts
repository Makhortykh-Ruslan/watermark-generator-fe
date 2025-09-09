import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  imports: [],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditPageComponent {}
