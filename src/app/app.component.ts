import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WgIconsService } from '../wg-icons/wg-icons.service';
import { completeIconSet } from '../wg-icons/wg-icons';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
})
export class AppComponent {
  protected readonly title = signal('Watermark Generator');

  constructor(private wgIconsService: WgIconsService) {
    wgIconsService.registerIcons(completeIconSet);
  }
}
