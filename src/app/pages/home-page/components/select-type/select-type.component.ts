import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core';

import { TTypeFile } from '@core/types';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrl: './select-type.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTypeComponent {
  public select = output<TTypeFile>();
}
