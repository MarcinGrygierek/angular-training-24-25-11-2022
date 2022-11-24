import { Component, Input } from '@angular/core';
import { BmiHistoryElement } from '../types';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.scss']
})
export class CalculatorResultComponent {
  @Input()
  result!: BmiHistoryElement;
}
