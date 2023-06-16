import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptyersComponent } from './chaptyers.component';

describe('ChaptyersComponent', () => {
  let component: ChaptyersComponent;
  let fixture: ComponentFixture<ChaptyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaptyersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
