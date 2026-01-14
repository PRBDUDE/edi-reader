import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {EdiInfoDialog} from './edi-info-dialog';
import {BgnBuilder} from '@edi/builders/bgn-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';

describe('EdiInfoDialog', () => {
  let component: EdiInfoDialog;
  let fixture: ComponentFixture<EdiInfoDialog>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EdiInfoDialog]
    }).compileComponents();

    fixture = TestBed.createComponent(EdiInfoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('check contents of \'BGN*00*345678*20251210*1440~\'', () => {
    let compiled: HTMLElement;
    const testData = 'BGN*00*345678*20251210*1440';
    const delimiters = getTestEdiDelimiters();

    beforeEach(() => {
      const testSegment = new BgnBuilder(testData, delimiters)
      fixture.componentRef.setInput('segment', testSegment);
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      compiled = fixture.nativeElement as HTMLElement;
    });

    it('should contain \'BGN Elements\'', () => {
      const tag = compiled.querySelector('h5');
      expect(tag?.textContent).toContain('BGN Elements');
    });

    describe('check all divs', () => {
      let divs: NodeListOf<HTMLElement>;
      let curDiv: HTMLElement;

      beforeEach(() => {
        divs = compiled.querySelectorAll('div');
      })

      describe('check divs[0]', () => {
        beforeEach(() => {
          curDiv = divs[0];
        });

        it('should contain \'BGN01:\'', () => {
          expect(curDiv.textContent).toContain('BGN01:');
        });

        it('should contain \'00\'', () => {
          expect(curDiv.textContent).toContain('00');
        });

        it('should contain \'transaction set purpose code\'', () => {
          expect(curDiv.textContent).toContain('transaction set purpose code');
        });
      });

      describe('check divs[1]', () => {
        beforeEach(() => {
          curDiv = divs[1];
        })

        it('should contain \'BGN02:\'', () => {
          expect(curDiv.textContent).toContain('BGN02:');
        });

        it('should contain \'345678\'', () => {
          expect(curDiv.textContent).toContain('345678');
        });

        it('should contain \'control number for the transaction set\'', () => {
          expect(curDiv.textContent).toContain('control number for the transaction set');
        });
      });

      describe('check divs[2]', () => {
        beforeEach(() => {
          curDiv = divs[2];
        });

        it('should contain \'BGN03:\'', () => {
          expect(curDiv.textContent).toContain('BGN03:');
        });

        it('should contain \'20251210\'', () => {
          expect(curDiv.textContent).toContain('20251210');
        });

        it('should contain \'transaction set creation date (YYYYMMDD)\'', () => {
          expect(curDiv.textContent).toContain('transaction set creation date (YYYYMMDD)');
        });
      });

      describe('check divs[3]', () => {
        beforeEach(() => {
          curDiv = divs[3];
        });

        it('should contain \'BGN04:\'', () => {
          expect(curDiv.textContent).toContain('BGN04:');
        });

        it('should contain \'1440\'', () => {
          expect(curDiv.textContent).toContain('1440');
        });

        it('should contain \'transaction set creation time (HHMM)\'', () => {
          expect(curDiv.textContent).toContain('transaction set creation time (HHMM)');
        });
      });
    });
  })
});
