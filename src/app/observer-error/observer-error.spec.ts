import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverError } from './observer-error';

describe('ObserverError', () => {
  let component: ObserverError;
  let fixture: ComponentFixture<ObserverError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
