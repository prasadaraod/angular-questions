import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverComplete } from './observer-complete';

describe('ObserverComplete', () => {
  let component: ObserverComplete;
  let fixture: ComponentFixture<ObserverComplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverComplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverComplete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
