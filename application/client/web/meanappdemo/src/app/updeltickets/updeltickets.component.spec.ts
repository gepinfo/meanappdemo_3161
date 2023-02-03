import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdelticketsComponent } from './updeltickets.component';

describe('UpdelticketsComponent', () => {
  let component: UpdelticketsComponent;
  let fixture: ComponentFixture<UpdelticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdelticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdelticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});