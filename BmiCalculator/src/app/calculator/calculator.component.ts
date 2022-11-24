import { Component } from '@angular/core';
import { BmiHistoryElement } from '../types';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  history: BmiHistoryElement[] = [];

  get lastResult(): BmiHistoryElement {
    return this.history[this.history.length - 1];
  }

  public getUserInfo() {
    const height = Number(prompt('Put your height in cm'));
    const weight = Number(prompt('Put your weight in kg'));

    const bmi = weight / Math.pow(height/100, 2);

    this.history = [
      ...this.history, 
      {
        weight,
        height,
        result: bmi
      }
    ]
  }
}
