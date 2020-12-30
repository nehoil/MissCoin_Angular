import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisscoinAppComponent } from './misscoin-app.component';

describe('MisscoinAppComponent', () => {
  let component: MisscoinAppComponent;
  let fixture: ComponentFixture<MisscoinAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisscoinAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisscoinAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
