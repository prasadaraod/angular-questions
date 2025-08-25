import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecorator } from './output-decorator';

describe('OutputDecorator', () => {
  let component: OutputDecorator;
  let fixture: ComponentFixture<OutputDecorator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputDecorator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputDecorator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
