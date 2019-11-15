import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { PORTALA_INJECT_DATA } from '../portal.component';

@Component({
  selector: 'app-portal-a',
  templateUrl: './portal-a.component.html',
  styleUrls: ['./portal-a.component.scss'],
  providers: [{ provide: PORTALA_INJECT_DATA, useExisting: forwardRef(() => PortalAComponent) }]
})
export class PortalAComponent implements OnInit {

  constructor(
    // @Inject(PORTALA_INJECT_DATA) public file: {id: string, name: string, opt_id: string}
  ) { }

  ngOnInit() {
  }

}
