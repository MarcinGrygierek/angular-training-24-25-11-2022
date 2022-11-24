import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmi'
})
export class BmiPipe implements PipeTransform {

  private getBmiStatus(value: number) {
    if(value < 17) return 'underweight';
    if(value > 27) return 'overweight';
    return 'normal';
  }

  transform(value: number): string {
    return `${value.toFixed(2)} ${this.getBmiStatus(value)}`;
  }

}
