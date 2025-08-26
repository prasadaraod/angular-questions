import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOne } from './observable-one';

describe('ObservableOne', () => {
  let component: ObservableOne;
  let fixture: ComponentFixture<ObservableOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
