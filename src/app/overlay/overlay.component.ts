import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  list: {name: string; id: number}[] = [];
  opOverlayRef: OverlayRef;
  @ViewChild('operationTpl', {static: false}) operationTpl: TemplateRef<any>;
  constructor(
    private overlay: Overlay,
    private vc: ViewContainerRef,
    private rotuer: Router
  ) { }

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.list.push({name: `算子${i}`, id: i});
    }
  }

  show(event: any, item: {name: string; id: number}) {
    const connectionPosition: ConnectedPosition[] = [
      {originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 2, offsetX: -4},
      {originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom', offsetY: -2, offsetX: -4},
    ];
    this.opOverlayRef = this.attachOverlay(event.currentTarget, this.operationTpl, this.vc,  connectionPosition, true, item);
  }

  // overlay 弹层
  attachOverlay(origin: ElementRef | HTMLElement, template: TemplateRef<any>, viewContainer: ViewContainerRef, connectionPosition: ConnectedPosition[], hasBackdrop = true, context?: any, ): OverlayRef {
    const positionStrategy = this.overlay.position().flexibleConnectedTo(origin).withPositions(connectionPosition);
    const overlayRef = this.overlay.create({
      scrollStrategy: this.overlay.scrollStrategies.close(),
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy,
      hasBackdrop,
    });
    if (overlayRef.hasAttached()) {
      overlayRef.detach();
    } else {
      overlayRef.attach(new TemplatePortal(template, viewContainer, {$implicit: context}));
    }
    const backdropClick = overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
      backdropClick.unsubscribe();
    });
    return overlayRef;
  }

  deleteItem(item: {name: string; id: number, index: number}) {
    this.list.splice(item.index, 1);
    console.log(item);
  }

  test() {
    this.rotuer.navigate(['/a11y'], {queryParams: {data: 1}});
  }
}
