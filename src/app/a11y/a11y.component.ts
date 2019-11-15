import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-a11y',
  templateUrl: './a11y.component.html',
  styleUrls: ['./a11y.component.scss'],
})
export class A11yComponent implements OnInit, AfterViewInit {
  list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
