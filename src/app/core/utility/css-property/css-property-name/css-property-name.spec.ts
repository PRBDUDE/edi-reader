import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CssPropertyName} from './css-property-name';

describe('CssPropertyName', () => {
  let component: CssPropertyName;
  let fixture: ComponentFixture<CssPropertyName>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CssPropertyName
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssPropertyName);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
