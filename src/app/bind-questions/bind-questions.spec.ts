import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindQuestions } from './bind-questions';

describe('BindQuestions', () => {
  let component: BindQuestions;
  let fixture: ComponentFixture<BindQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
