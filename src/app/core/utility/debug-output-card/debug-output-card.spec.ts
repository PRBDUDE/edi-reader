import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {DebugOutputCard} from './debug-output-card';

describe('DebugOutputCard', () => {
  let component: DebugOutputCard;
  let fixture: ComponentFixture<DebugOutputCard>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DebugOutputCard
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugOutputCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
