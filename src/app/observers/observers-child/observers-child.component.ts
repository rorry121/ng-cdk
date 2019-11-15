import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observers-child',
  templateUrl: './observers-child.component.html',
  styleUrls: ['./observers-child.component.scss']
})
export class ObserversChildComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  projectContentChanged($event) {
    console.log('子：', $event);
  }

}
