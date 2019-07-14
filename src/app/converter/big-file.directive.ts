import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBigFile]'
})
export class BigFileDirective implements OnInit {
  @Input()
  size: number;

  @Input()
  threshold = 1024;

  private readonly color = {
    small: 'green',
    big: 'red'
  };

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.getColor();
  }

  private getColor(): string {
    return this.size >= this.threshold ? this.color.big : this.color.small;
  }
}
