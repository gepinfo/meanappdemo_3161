import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchupticketComponent } from './searchupticket.component';

describe('SearchupticketComponent', () => {
  let component: SearchupticketComponent;
  let fixture: ComponentFixture<SearchupticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchupticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchupticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});