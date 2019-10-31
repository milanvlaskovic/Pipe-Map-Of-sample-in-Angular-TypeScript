import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffDemoComponent } from './off-demo.component';

describe('OffDemoComponent', () => {
  let component: OffDemoComponent;
  let fixture: ComponentFixture<OffDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
