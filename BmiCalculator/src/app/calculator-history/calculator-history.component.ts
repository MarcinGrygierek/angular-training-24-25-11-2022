import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BmiHistoryElement } from '../types';

@Component({
  selector: 'app-calculator-history',
  templateUrl: './calculator-history.component.html',
  styleUrls: ['./calculator-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorHistoryComponent {
  @Input()
  history: BmiHistoryElement[] = []
}
