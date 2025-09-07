import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { WgIconComponent } from '../wg-icon.component';
import { completeIconSet, WgIcon } from '../wg-icons';

@Component({
  selector: 'app-icons-preview',
  templateUrl: './icons-preview.component.html',
  styleUrls: ['./icons-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, WgIconComponent],
})
export class IconsPreviewComponent implements OnInit {
  public icons = completeIconSet;
  public searchControl: FormControl = new FormControl('');
  public subscription!: Subscription;

  public ngOnInit(): void {
    this.subscription = this.searchControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val: string) => {
        this.icons = completeIconSet.filter((el: WgIcon) =>
          el.name.includes(val),
        );
      });
  }
}
