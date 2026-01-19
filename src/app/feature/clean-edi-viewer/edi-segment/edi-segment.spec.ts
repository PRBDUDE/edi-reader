import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EdiSegment} from './edi-segment';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {Nm1Builder} from '@edi/builders/nm1-builder';

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
    const testData = 'NM1*IL*1*DOE*PAUL****34*234567891';
    const delimiters = getTestEdiDelimiters();

    beforeEach(() => {
      const testSegment = new Nm1Builder(testData, delimiters);
      fixture.componentRef.setInput('segment', testSegment);
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      compiled = fixture.nativeElement as HTMLElement;
    });

    describe('check all spans', () => {
      let spans: NodeListOf<HTMLElement>;

      beforeEach(() => {
        spans = compiled.querySelectorAll('span');
      });

      it('should contain \'NM1\' in spans[0]', () => {
        expect(spans[0].textContent).toEqual('NM1');
      });

      it('should contain \'*\' in spans[1]', () => {
        expect(spans[1].textContent).toEqual('*');
      });

      it('should contain \'IL\' in spans[2]', () => {
        expect(spans[2].textContent).toEqual('IL');
      });

      it('should contain \'*\' in spans[3]', () => {
        expect(spans[3].textContent).toEqual('*');
      });

      it('should contain \'1\' in spans[4]', () => {
        expect(spans[4].textContent).toEqual('1');
      });

      it('should contain \'*\' in spans[5]', () => {
        expect(spans[5].textContent).toEqual('*');
      });

      it('should contain \'DOE\' in spans[6]', () => {
        expect(spans[6].textContent).toEqual('DOE');
      });

      it('should contain \'*\' in spans[7]', () => {
        expect(spans[7].textContent).toEqual('*');
      });

      it('should contain \'PAUL\' in spans[8]', () => {
        expect(spans[8].textContent).toEqual('PAUL');
      });

      it('should contain \'*\' in spans[9]', () => {
        expect(spans[9].textContent).toEqual('*');
      });

      it('should contain \'\' in spans[10]', () => {
        expect(spans[10].textContent).toBe('');
      });

      it('should contain \'*\' in spans[11]', () => {
        expect(spans[11].textContent).toEqual('*');
      });

      it('should contain \'\' in spans[12]', () => {
        expect(spans[12].textContent).toBe('');
      });

      it('should contain \'*\' in spans[13]', () => {
        expect(spans[13].textContent).toEqual('*');
      });

      it('should contain \'*\' in spans[15]', () => {
        expect(spans[15].textContent).toEqual('*');
      });

      it('should contain \'34\' in spans[16]', () => {
        expect(spans[16].textContent).toEqual('34');
      });

      it('should contain \'*\' in spans[17]', () => {
        expect(spans[17].textContent).toEqual('*');
      });

      it('should contain \'234567891\' in spans[18]', () => {
        expect(spans[18].textContent).toEqual('234567891');
      });
    });
  });
});
