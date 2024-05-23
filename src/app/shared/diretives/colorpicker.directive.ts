import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[appColorpicker]'
})
export class ColorpickerDirective implements OnInit {

  constructor(private ref: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(): void {
    const element = this.ref.nativeElement;
    this.renderer2.addClass(element, "text-red-500");
  }

}
