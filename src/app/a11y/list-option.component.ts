import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';

@Component({
  selector: 'app-list-option',
  styles: [`
    :host {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      background-color: #0090FF;
      transition: all 0.3s;
      outline: none;
      color: white;
    }

    :host(:focus) {
      background-color: #28BF5F;
      transform: translateX(1rem);
    }
  `],
  template: `
    <li>
      <ng-content></ng-content>
    </li>
  `,
})
export class ListOptionComponent implements FocusableOption {

  @Input() fruit: string;
  disabled: boolean;
  /**
   * 屏蔽掉默认的键盘事件，js里面自己控制键盘事件
   */
  @HostBinding('tabindex') tabindex = '0';
  constructor(private el: ElementRef) { }

  focus(origin?: 'touch' | 'mouse' | 'keyboard' | 'program' | null): void {
    this.el.nativeElement.focus();
  }

  getLabel(): string {
    return this.fruit;
  }

}
