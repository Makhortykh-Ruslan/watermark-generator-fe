import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';

import { WgIconComponent } from '@icons/wg-icon.component';

import { DragDropFileComponent } from '@core/components/drag-drop-file/drag-drop-file.component';
import { ESteps, TSteps } from '@core/enum';
import { TTypeFile } from '@core/types';

import { SelectTypeComponent } from './components/select-type/select-type.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SelectTypeComponent,
    WgIconComponent,
    DragDropFileComponent,
  ],
})
export class HomePageComponent {
  public currentStep = signal<TSteps>(ESteps.SELECT_TYPE);
  public selectedTypeFile = signal<TTypeFile>('img');

  public ESteps = ESteps;

  public handleChangeStep(value: TTypeFile): void {
    this.currentStep.set(ESteps.UPLOAD_FILE);
    this.selectedTypeFile.set(value);
  }

  public handleSelectedFile(files: File[]): void {
    console.log('handleSelectedFile', files);
  }
}
