import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTransform]'
})
export class ScrollTransformDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

}

