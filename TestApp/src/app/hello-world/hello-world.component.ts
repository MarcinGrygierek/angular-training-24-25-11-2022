import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent {

  @Input()
  text: string = '';

  @Input()
  randomNumber!: number;

  @Input()
  generateNumber!: Function;

  @Output()
  callback = new EventEmitter<number>();

  public generateOwnNumber() {
    const random = Math.round(Math.random() * 1000);
    this.callback.emit(random);
  }

}
