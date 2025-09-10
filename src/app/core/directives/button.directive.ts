import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

import { TButtonColorTypes } from '@core/types';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnChanges, OnInit {
  @Input() color: TButtonColorTypes = 'grey';
  @Input() isUseStroke = false;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef,
  ) {}

  public ngOnChanges({ color, isUseStroke }: SimpleChanges): void {
    if (color && color?.currentValue) {
      this.renderer2.removeClass(
        this.elementRef.nativeElement,
        color.previousValue,
      );

      this.renderer2.addClass(
        this.elementRef.nativeElement,
        color.currentValue,
      );
    }

    if (isUseStroke && !isUseStroke?.currentValue) {
      this.renderer2.removeClass(
        this.elementRef.nativeElement,
        'stroke',
      );
    }

    if (isUseStroke && isUseStroke?.currentValue) {
      this.renderer2.addClass(
        this.elementRef.nativeElement,
        'stroke',
      );
    }
  }

  public ngOnInit(): void {
    this.renderer2.addClass(
      this.elementRef.nativeElement,
      'wg-button',
    );
    this.renderer2.addClass(
      this.elementRef.nativeElement,
      this.color,
    );

    if (this.isUseStroke) {
      this.renderer2.addClass(
        this.elementRef.nativeElement,
        'stroke',
      );
    }
  }
}
