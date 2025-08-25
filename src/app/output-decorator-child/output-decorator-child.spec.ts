import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorChild } from './output-decorator-child';

describe('OutputDecoratorChild', () => {
  let component: OutputDecoratorChild;
  let fixture: ComponentFixture<OutputDecoratorChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDecoratorChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDecoratorChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
