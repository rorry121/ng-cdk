import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutosize]'
})
export class AutosizeDirective {

  @HostListener('input') onInput() {
    this.autosize();
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  autosize() {
    if (this.el.nativeElement.clientHeight <  this.el.nativeElement.scrollHeight) {
      this.renderer.setStyle(this.el.nativeElement, 'height', this.el.nativeElement.scrollHeight + 'px');
    }
  }

}
