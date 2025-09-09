import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core';

import { WgIconComponent } from '@icons/wg-icon.component';

import { TTypeFile } from '@core/types';

@Component({
  selector: 'app-select-type',
  imports: [WgIconComponent],
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SelectTypeComponent {
  public output = output<TTypeFile>();
}
