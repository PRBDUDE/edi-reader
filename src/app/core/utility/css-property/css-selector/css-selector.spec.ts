import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSelector } from './css-selector';

describe('CssSelector', () => {
  let component: CssSelector;
  let fixture: ComponentFixture<CssSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
