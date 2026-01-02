import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {RoadblockHeader} from './roadblock-header';
import {provideRouter} from "@angular/router";
import {provideHttpClient} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('RoadblockHeader', () => {
  let component: RoadblockHeader;
  let fixture: ComponentFixture<RoadblockHeader>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RoadblockHeader
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadblockHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
