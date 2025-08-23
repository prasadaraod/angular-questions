import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveQuestions } from './directive-questions';

describe('DirectiveQuestions', () => {
  let component: DirectiveQuestions;
  let fixture: ComponentFixture<DirectiveQuestions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectiveQuestions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveQuestions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
