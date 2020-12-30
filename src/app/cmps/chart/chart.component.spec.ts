import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCmp } from './chart.component';

describe('ChartCmp', () => {
  let component: ChartCmp;
  let fixture: ComponentFixture<ChartCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCmp ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
