import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronousAsynchronous } from './synchronous-asynchronous';

describe('SynchronousAsynchronous', () => {
  let component: SynchronousAsynchronous;
  let fixture: ComponentFixture<SynchronousAsynchronous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynchronousAsynchronous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronousAsynchronous);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
