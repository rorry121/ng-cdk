import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DIR_DOCUMENT, Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'app-bidi',
  templateUrl: './bidi.component.html',
  styleUrls: ['./bidi.component.scss']
})
export class BidiComponent implements OnInit, OnDestroy {
  dir = 'rtl';
  /** Subscription to the Directionality change EventEmitter. */
  private dirChangeSubscription = Subscription.EMPTY;

  constructor(
    @Inject(DIR_DOCUMENT) public dirDoc: any,
    public directionality: Directionality
  ) {
    this.dirChangeSubscription = directionality.change.subscribe(() => {
    });
  }


  ngOnInit() {
    // 获取document
    console.log(this.dirDoc);
    // ltr 获取当前值
    const dir = this.directionality.value;
    console.log('dir is ', dir);
  }

  ngOnDestroy() {
    this.dirChangeSubscription.unsubscribe();
  }

  switchDir() {
    if (this.dir === 'rtl') {
      this.dir = 'ltr';
    } else {
      this.dir = 'rtl';
    }
  }

  dirChange() {
    console.log('aaa');
  }

}
