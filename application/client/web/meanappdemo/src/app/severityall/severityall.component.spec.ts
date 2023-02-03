import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeverityallComponent } from './severityall.component';

describe('SeverityallComponent', () => {
  let component: SeverityallComponent;
  let fixture: ComponentFixture<SeverityallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeverityallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeverityallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});