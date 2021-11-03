import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultQueryComponent } from './result-query.component';

describe('ResultQueryComponent', () => {
  let component: ResultQueryComponent;
  let fixture: ComponentFixture<ResultQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
