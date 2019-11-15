import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserversChildComponent } from './observers-child.component';

describe('ObserversChildComponent', () => {
  let component: ObserversChildComponent;
  let fixture: ComponentFixture<ObserversChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserversChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserversChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
