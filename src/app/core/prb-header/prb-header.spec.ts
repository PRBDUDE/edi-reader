import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {PrbHeader} from './prb-header';
import {provideRouter} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('PrbHeader', () => {
  let component: PrbHeader;
  let fixture: ComponentFixture<PrbHeader>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PrbHeader
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrbHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
