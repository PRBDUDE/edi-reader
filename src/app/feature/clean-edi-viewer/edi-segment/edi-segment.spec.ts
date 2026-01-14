import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EdiSegment} from './edi-segment';

describe('EdiSegment', () => {
  let component: EdiSegment;
  let fixture: ComponentFixture<EdiSegment>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EdiSegment]
    }).compileComponents();

    fixture = TestBed.createComponent(EdiSegment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check contents of \'NM1*IL*1*DOE*PAUL****34*234567891~\'', () => {
    let compiled: HTMLElement;
    const
  });
});
