import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';

import { WgIconComponent } from '@icons/wg-icon.component';

import {
  ButtonDirective,
  DragAndDropDirective,
} from '@core/directives';
import { TTypeFile } from '@core/types';

import { TDragDropSize } from './types/t-drag-drop-size';

@Component({
  selector: 'app-drag-drop-file',
  templateUrl: './drag-drop-file.component.html',
  styleUrls: ['./drag-drop-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonDirective, DragAndDropDirective, WgIconComponent],
})
export class DragDropFileComponent {
  public size = input<TDragDropSize>('big');
  public type = input.required<TTypeFile>();
  @Input() multiSelect = true;

  @Output() uploadFiles: EventEmitter<File[]> = new EventEmitter<
    File[]
  >();

  private availableMIMEFormats: Set<string> = new Set([
    // Images
    'image/png',
    'image/jpeg',

    // Documents
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/rtf',
    'application/vnd.ms-outlook',

    // AUDIO / VIDEO
    'video/mp4',
    'audio/mp4',
    'video/quicktime',
    'audio/x-m4a',
  ]);

  private availableNotMIMEFormats: Set<string> = new Set(['msg']);

  public handleDropFiles(event: FileList): void {
    this.uploadFiles.emit(this.filesValidator(event));
  }

  public handleUploadFiles(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files as FileList;

    if (files.length === 0) return;

    this.uploadFiles.emit(this.filesValidator(files));
  }

  private filesValidator(droppedFiles: FileList): File[] {
    return Array.from(droppedFiles)
      .map((file: File) => {
        if (!file) {
          return;
        }

        const extension =
          file.name.split('.').pop()?.toLowerCase() || '';

        if (
          !this.availableMIMEFormats.has(file.type) &&
          !this.availableNotMIMEFormats.has(extension)
        ) {
          alert('Error');
          return;
        }

        return file;
      })
      .filter(Boolean) as File[];
  }
}
