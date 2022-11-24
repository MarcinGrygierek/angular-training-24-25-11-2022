import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestApp';
  randomNumber!: number;
  color: string = 'red';

  public calculateSomething(a: number, b: number) {
    if(b === 0) throw new Error('Dividing by 0 is prohibited!');
    return a / b;
  }

  public generateRandomNumber() {
    this.randomNumber = Math.round(Math.random() * 1000)
  }

  public handleCallback(value: number) {
    this.randomNumber = value;
  }

  public formatPrice(value: number) {
    return `${value} EUR`;
  }
}
