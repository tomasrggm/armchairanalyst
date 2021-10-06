import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testarea2Component } from './testarea2.component';

describe('Testarea2Component', () => {
  let component: Testarea2Component;
  let fixture: ComponentFixture<Testarea2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testarea2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testarea2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
