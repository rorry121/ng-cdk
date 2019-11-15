import { AfterContentInit, Component, ContentChildren, HostBinding, HostListener, OnInit, QueryList } from '@angular/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { ENTER, TAB } from '@angular/cdk/keycodes';
import { ListOptionComponent } from './list-option.component';

@Component({
  selector: 'app-list',
  styles: [`
    :host {
      display: block;
      max-width: 30rem;
    }
  `],
  template: `
    <h3>当前选中：{{this.model}}</h3>
    <ng-content></ng-content>
  `,
})

export class ListComponent implements AfterContentInit {

  model = '';
  private keyManager: FocusKeyManager<ListOptionComponent>;
  // @ts-ignore
  @ContentChildren(ListOptionComponent) listElement: QueryList<ListOptionComponent>;
  // @HostBinding('tabindex') tabindex = '0';
  @HostListener('keydown', ['$event'])
  manage(event) {
    if (event.keyCode === ENTER) {
      this.model = this.keyManager.activeItem.fruit;
    } else if (event.keyCode === TAB) {
      this.keyManager.onKeydown(event);
    } else {
      this.keyManager.onKeydown(event);
    }
  }

  ngAfterContentInit(): void {
    this.keyManager = new FocusKeyManager(this.listElement).withWrap();
  }
}
