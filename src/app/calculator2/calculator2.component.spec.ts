import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent2 } from './calculator2.component';

describe('Calculator2Component', () => {
  let component: CalculatorComponent2;
  let fixture: ComponentFixture<CalculatorComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
