import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDone]'
})
export class DoneDirective implements OnInit {

  @Input() appDone: Record<string, string> = {};

  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit() {

    this.elementRef.nativeElement.style.border = `${this.appDone["border-width"]} solid ${this.appDone["border-color"]}`;
    this.elementRef.nativeElement.style.padding = this.appDone["padding"];
    this.elementRef.nativeElement.style.margin = this.appDone["margin"];
    this.elementRef.nativeElement.style.borderRadius = this.appDone["border-radius"];
  }
}
