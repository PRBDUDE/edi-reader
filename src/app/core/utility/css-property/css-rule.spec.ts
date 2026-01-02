import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CssRule} from './css-rule';

describe('CssPropertyComponent', () => {
  let component: CssRule;
  let fixture: ComponentFixture<CssRule>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CssRule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssRule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
