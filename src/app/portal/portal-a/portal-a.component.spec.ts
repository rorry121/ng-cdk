import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalAComponent } from './portal-a.component';

describe('PortalAComponent', () => {
  let component: PortalAComponent;
  let fixture: ComponentFixture<PortalAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
