import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.scss']
})
export class ObserversComponent implements OnInit, AfterViewInit {
  @ViewChild('observerSource', {static: false})
  observerSource: ElementRef;

  content = 1;

  constructor(
    private observer: ContentObserver
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // ContentObserver service监听变化
    this.observer.observe(this.observerSource.nativeElement).subscribe((event: MutationRecord[]) => {
      console.log('父：', event);
    });
  }

  changeContent() {
    this.content++;
  }
}
