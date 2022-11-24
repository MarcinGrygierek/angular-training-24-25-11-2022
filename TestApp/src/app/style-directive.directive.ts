import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective {
  @Input() appStyleDirective: string = '';

  constructor(private el: ElementRef) { 
    console.log(this.el.nativeElement.children);
  }

  @HostListener('click') handleClick() {
    this.el.nativeElement.style.backgroundColor = this.appStyleDirective;
  }

}
