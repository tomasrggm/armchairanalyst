import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirecterComponent } from './redirecter.component';

describe('RedirecterComponent', () => {
  let component: RedirecterComponent;
  let fixture: ComponentFixture<RedirecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
