import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ColorPalettePicker} from './color-palette-picker';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";

describe('ColorPalettePicker', () => {
  let component: ColorPalettePicker;
  let fixture: ComponentFixture<ColorPalettePicker>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ColorPalettePicker
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalettePicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
