import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {EdiInfoDialog} from './edi-info-dialog';
import {BgnBuilder} from '@edi/builders/bgn-builder';
import {getTestEdiDelimiters} from '@ediTest/edi-utilities';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {IsaBuilder} from '@edi/builders/isa-builder';

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

        it('should contain \'12/10/2025\'', () => {
          expect(curDiv.textContent).toContain('12/10/2025');
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
  });

  describe('check contents of \'ISA*00*          *00*          *ZZ*SENDERID      *ZZ*RECEIVERID    *180625*0715*U*00401*000000001*0*T*:~\'', () => {
    let compiled: HTMLElement;
    const testData = 'ISA*00*          *00*          *ZZ*SENDERID      *ZZ*RECEIVERID    *180625*0715*U*00401*000000001*0*T*:~';
    const delimiters = getTestEdiDelimiters();

    beforeEach(() => {
      const testSegment = new IsaBuilder(testData, delimiters)
      fixture.componentRef.setInput('segment', testSegment);
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      compiled = fixture.nativeElement as HTMLElement;
    });

    it('should contain \'ISA Elements\'', () => {
      const tag = compiled.querySelectorAll('h5');
      expect(tag[0].textContent).toContain('ISA Elements');
    });

    describe('check all divs', () => {
      let divs: NodeListOf<HTMLElement>;
      let curDiv: HTMLElement;

      beforeEach(() => {
        divs = compiled.querySelectorAll('div');
      });

      describe('check divs[0]', () => {
        beforeEach(() => {
          curDiv = divs[0];
        });

        it('should contain \'ISA01:\'', () => {
          expect(curDiv.textContent).toContain('ISA01:');
        });

        it('should contain \'00\'', () => {
          expect(curDiv.textContent).toContain('00');
        });

        it('should contain \'type of authorization\'', () => {
          expect(curDiv.textContent).toContain('type of authorization');
        });
      });

      describe('check divs[1]', () => {
        beforeEach(() => {
          curDiv = divs[1];
        });

        it('should contain \'ISA02:\'', () => {
          expect(curDiv.textContent).toContain('ISA02:');
        });

        it('should contain \' \'', () => {
          expect(curDiv.textContent).toContain(' ');
        });

        it('should contain \'actual authorization info\'', () => {
          expect(curDiv.textContent).toContain('actual authorization info');
        });
      });

      describe('check divs[2]', () => {
        beforeEach(() => {
          curDiv = divs[2];
        });

        it('should contain \'ISA03:\'', () => {
          expect(curDiv.textContent).toContain('ISA03:');
        });

        it('should contain \'00\'', () => {
          expect(curDiv.textContent).toContain('00');
        });

        it('should contain \'type of security info\'', () => {
          expect(curDiv.textContent).toContain('type of security info');
        });
      });

      describe('check divs[3]', () => {
        beforeEach(() => {
          curDiv = divs[3];
        });

        it('should contain \'ISA04:\'', () => {
          expect(curDiv.textContent).toContain('ISA04:');
        });

        it('should contain \' \'', () => {
          expect(curDiv.textContent).toContain(' ');
        });

        it('should contain \'actual security info\'', () => {
          expect(curDiv.textContent).toContain('actual security info');
        });
      });

      describe('check divs[4]', () => {
        beforeEach(() => {
          curDiv = divs[4];
        });

        it('should contain \'ISA05:\'', () => {
          expect(curDiv.textContent).toContain('ISA05:');
        });

        it('should contain \'ZZ\'', () => {
          expect(curDiv.textContent).toContain('ZZ');
        });

        it('should contain \'code identifying the sender\'s ID type\'', () => {
          expect(curDiv.textContent).toContain('code identifying the sender\'s ID type');
        });
      });

      describe('check divs[5]', () => {
        beforeEach(() => {
          curDiv = divs[5];
        });

        it('should contain \'ISA06:\'', () => {
          expect(curDiv.textContent).toContain('ISA06:');
        });

        it('should contain \'SENDERID\'', () => {
          expect(curDiv.textContent).toContain('SENDERID');
        });

        it('should contain \'sender\'s ID\'', () => {
          expect(curDiv.textContent).toContain('sender\'s ID');
        });
      });

      describe('check divs[6]', () => {
        beforeEach(() => {
          curDiv = divs[6];
        });

        it('should contain \'ISA07:\'', () => {
          expect(curDiv.textContent).toContain('ISA07:');
        });

        it('should contain \'ZZ\'', () => {
          expect(curDiv.textContent).toContain('ZZ');
        });

        it('should contain \'code identifying the receiver\'s ID type\'', () => {
          expect(curDiv.textContent).toContain('code identifying the receiver\'s ID type');
        });
      });

      describe('check divs[7]', () => {
        beforeEach(() => {
          curDiv = divs[7];
        });

        it('should contain \'ISA08:\'', () => {
          expect(curDiv.textContent).toContain('ISA08:');
        });

        it('should contain \'RECEIVERID\'', () => {
          expect(curDiv.textContent).toContain('RECEIVERID');
        });

        it('should contain \'receiver\'s ID\'', () => {
          expect(curDiv.textContent).toContain('receiver\'s ID');
        });
      });

      describe('check divs[8]', () => {
        beforeEach(() => {
          curDiv = divs[8];
        });

        it('should contain \'ISA09:\'', () => {
          expect(curDiv.textContent).toContain('ISA09:');
        });

        it('should contain \'06/25/2018\'', () => {
          expect(curDiv.textContent).toContain('06/25/2018');
        });

        it('should contain \'date in YYMMDD format\'', () => {
          expect(curDiv.textContent).toContain('date in YYMMDD format');
        });
      });

      describe('check divs[9]', () => {
        beforeEach(() => {
          curDiv = divs[9];
        });

        it('should contain \'ISA10:\'', () => {
          expect(curDiv.textContent).toContain('ISA10:');
        });

        it('should contain \'0715\'', () => {
          expect(curDiv.textContent).toContain('0715');
        });

        it('should contain \'time in HHMM format\'', () => {
          expect(curDiv.textContent).toContain('time in HHMM format');
        });
      });

      describe('check divs[10]', () => {
        beforeEach(() => {
          curDiv = divs[10];
        });

        it('should contain \'ISA11:\'', () => {
          expect(curDiv.textContent).toContain('ISA11:');
        });

        it('should contain \'U\'', () => {
          expect(curDiv.textContent).toContain('U');
        });

        it('should contain \'control standards ID\'', () => {
          expect(curDiv.textContent).toContain('control standards ID');
        });
      });

      describe('check divs[11]', () => {
        beforeEach(() => {
          curDiv = divs[11];
        });

        it('should contain \'ISA12:\'', () => {
          expect(curDiv.textContent).toContain('ISA12:');
        });

        it('should contain \'00401\'', () => {
          expect(curDiv.textContent).toContain('00401');
        });

        it('should contain \'interchange control version number\'', () => {
          expect(curDiv.textContent).toContain('interchange control version number');
        });
      });

      describe('check divs[12]', () => {
        beforeEach(() => {
          curDiv = divs[12];
        });

        it('should contain \'ISA13:\'', () => {
          expect(curDiv.textContent).toContain('ISA13:');
        });

        it('should contain \'000000001\'', () => {
          expect(curDiv.textContent).toContain('000000001');
        });

        it('should contain \'interchange control number\'', () => {
          expect(curDiv.textContent).toContain('interchange control number');
        });
      });

      describe('check divs[13]', () => {
        beforeEach(() => {
          curDiv = divs[13];
        });

        it('should contain \'ISA14:\'', () => {
          expect(curDiv.textContent).toContain('ISA14:');
        });

        it('should contain \'0\'', () => {
          expect(curDiv.textContent).toContain('0');
        });

        it('should contain \'acknowledgement requested\'', () => {
          expect(curDiv.textContent).toContain('acknowledgement requested');
        });
      });

      describe('check divs[14]', () => {
        beforeEach(() => {
          curDiv = divs[14];
        });

        it('should contain \'ISA15:\'', () => {
          expect(curDiv.textContent).toContain('ISA15:');
        });

        it('should contain \'T\'', () => {
          expect(curDiv.textContent).toContain('T');
        });

        it('should contain \'usage indicator (P for Production; T for Test)\'', () => {
          expect(curDiv.textContent).toContain('usage indicator (P for Production; T for Test)');
        });
      });

      describe('check divs[15]', () => {
        beforeEach(() => {
          curDiv = divs[15];
        });

        it('should contain \'ISA16:\'', () => {
          expect(curDiv.textContent).toContain('ISA16:');
        });

        it('should contain \':\'', () => {
          expect(curDiv.textContent).toContain(':');
        });

        it('should contain \'component element separator\'', () => {
          expect(curDiv.textContent).toContain('component element separator');
        });
      });
    });
  });
});
