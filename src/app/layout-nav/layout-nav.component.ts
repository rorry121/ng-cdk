import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-layout-nav',
  templateUrl: './layout-nav.component.html',
  styleUrls: ['./layout-nav.component.scss']
})
export class LayoutNavComponent {
  routeConfig = [
    {cn: '无障碍性', en: 'Accessibility', url: 'a11y'},
    {cn: '文字方向', en: 'Bidirectionality', url: 'bidi'},
    {cn: '拖放', en: 'Drag and Drop', url: 'drag-drop'},
    {cn: '布局', en: 'Layout', url: 'layout'},
    {cn: '观察者', en: 'Observers', url: 'observers'},
    {cn: '浮层', en: 'Overlay', url: 'overlay'},
    {cn: '平台', en: 'Platform', url: 'platform'},
    {cn: '门户', en: 'Portal', url: 'portal'},
    {cn: '滚动', en: 'Scrolling', url: 'scroll'},
    {cn: '文本文字', en: 'Text Filed', url: 'text-field' },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      // tap(e => console.log('breakpointObserver:', e)),
      map(result => result.matches),
      // tap(e => console.log('matches:', e)),
      shareReplay(),
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
