import {
  AfterViewInit,
  Component,
  InjectionToken, Injector,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { CdkPortal, CdkPortalOutlet, ComponentPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { PortalAComponent } from './portal-a/portal-a.component';

export const PORTALA_INJECT_DATA = new InjectionToken<any>('portal4-inject-data');

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, AfterViewInit {
  name: string;
  fileList = [
    {
      id: 1,
      name: '算子一',
      opt_id: 'opt_11',
    },
    {
      id: 2,
      name: '算子二',
      opt_id: 'opt_22',
    },
    {
      id: 3,
      name: '算子三',
      opt_id: 'opt_33',
    },
    {
      id: 3,
      name: '组件显示我',
      opt_id: 'opt_33',
    },
  ];
  currentPortal: Portal<any>;
  @ViewChild('portalTemplate', {static: false}) portalTemplate: TemplateRef<any>;
  @ViewChild('fileTemplate', {static: false}) fileTemplate: TemplateRef<any>;
  @ViewChild('portalOutlet', {static: false}) portalOutlet: CdkPortalOutlet;
  @ViewChildren(CdkPortal) cdkPortalList: QueryList<CdkPortal>;

  constructor(
    private vc: ViewContainerRef,
    private injector: Injector,
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.cdkPortalList);
  }

  changePortal(num: number) {
    if (num === 1 || num === 0) {
      const list = this.cdkPortalList.toArray();
      this.currentPortal = list[num];
    } else {
      // 第三个参数
      this.currentPortal = new TemplatePortal(this.portalTemplate, this.vc);
    }
    console.log(this.currentPortal);
  }

  // 控制 cdkPortalOutlet

  attachDataToPortal(context: any, component: boolean) {
    // if (this.portalOutlet.hasAttached()) {
    //   this.portalOutlet.detach();
    // }
    if (!component) {
      this.portalOutlet.attachTemplatePortal(new TemplatePortal(this.fileTemplate, this.vc, {$implicit: context, name: '123'}));
    } else {
      const portalInjector = this._createInjector();
      // this.portalOutlet.attachComponentPortal(new ComponentPortal<PortalAComponent>(PortalAComponent, this.vc, portalInjector));
    }

  }

  fileClick(index: number) {
    if (index !== 3) {
      this.attachDataToPortal(this.fileList[index], false);
    } else {
      this.attachDataToPortal(this.fileList[3], true);
    }
  }

  private _createInjector(): PortalInjector {
    const injectionTokens = new WeakMap();
    injectionTokens.set(PORTALA_INJECT_DATA, this.fileList[3]);
    return new PortalInjector(this.injector, injectionTokens);
  }
}
