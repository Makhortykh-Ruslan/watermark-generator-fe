import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';

import { ESteps, TSteps } from '@core/enum';
import { TTypeFile } from '@core/types';

import { SelectTypeComponent } from './components/select-type/select-type.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SelectTypeComponent, UploadFileComponent],
})
export class HomePageComponent {
  public pageStep = signal<TSteps>(ESteps.SELECT_TYPE);

  public ESteps = ESteps;

  public handleChangeStep(value: TTypeFile): void {
    this.pageStep.set(ESteps.UPLOAD_FILE);
  }
}
