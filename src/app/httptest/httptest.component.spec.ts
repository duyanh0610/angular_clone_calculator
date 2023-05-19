import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptestComponent } from './httptest.component';

describe('HttptestComponent', () => {
  let component: HttptestComponent;
  let fixture: ComponentFixture<HttptestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttptestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttptestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
