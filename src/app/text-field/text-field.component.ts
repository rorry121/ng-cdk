import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {


  @ViewChild('autosize', {static: false}) autosize: CdkTextareaAutosize;
  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
