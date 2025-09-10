import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDrag]',
  standalone: true,
})
export class DragAndDropDirective {
  @Input() isDisabled = false;
  @Output() fileDropped: EventEmitter<FileList> =
    new EventEmitter<FileList>();

  @HostBinding('class.file-over') fileOver: boolean | undefined;

  @HostListener('dragover', ['$event']) public onDragOver(
    event: Event,
  ): void {
    if (!this.isDisabled) return;
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(
    event: Event,
  ): void {
    if (!this.isDisabled) return;
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(
    event: DragEvent,
  ): void {
    if (!this.isDisabled) return;
    event.preventDefault();
    event.stopPropagation();

    this.fileOver = false;

    if (event.dataTransfer) {
      const files = event.dataTransfer.files;

      if (files.length > 0) {
        this.fileDropped.emit(files);
      }
    }
  }
}
