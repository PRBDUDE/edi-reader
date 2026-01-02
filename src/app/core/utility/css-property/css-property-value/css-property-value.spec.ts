import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CssPropertyValue} from './css-property-value';

describe('CssPropertyValue', () => {
  let component: CssPropertyValue;
  let fixture: ComponentFixture<CssPropertyValue>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CssPropertyValue
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPropertyValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
