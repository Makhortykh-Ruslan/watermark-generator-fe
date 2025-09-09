import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WgIconComponent } from '../../../wg-icons/wg-icon.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [WgIconComponent],
})
export class HomePageComponent {}
