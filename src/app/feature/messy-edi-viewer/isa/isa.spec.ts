import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Isa} from './isa';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Isa', () => {
  let component: Isa;
  let fixture: ComponentFixture<Isa>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Isa]
    }).compileComponents();

    fixture = TestBed.createComponent(Isa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:', () => {
    const testData = 'ISA*00*          *00*          *ZZ*87790056      *ZZ*576687090     *251107*1430*^*00501*000000905*0*T*:';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.data()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.segmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.elementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.subElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-isa\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-isa');
      });

      it('should contain span[0] with \'ISA\'', () => {
        expect(spans[0].innerHTML).toContain('ISA');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'00\'', () => {
        expect(spans[2].innerHTML).toContain('00');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'          \'', () => {
        expect(spans[4].innerHTML).toContain('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'00\'', () => {
        expect(spans[6].innerHTML).toContain('00');
      });

      it('should contain span[7] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[8] with \'          \'', () => {
        expect(spans[8].innerHTML).toContain('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
      });

      it('should contain span[9] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[9].innerHTML).toContain('*');
        expect(spans[9].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[10] with \'ZZ\'', () => {
        expect(spans[10].innerHTML).toContain('ZZ');
      });

      it('should contain span[11] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[11].innerHTML).toContain('*');
        expect(spans[11].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[12] with \'87790056\'', () => {
        expect(spans[12].innerHTML).toContain('87790056');
      });

      it('should contain span[13] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[13].innerHTML).toContain('*');
        expect(spans[13].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[14] with \'ZZ\'', () => {
        expect(spans[14].innerHTML).toContain('ZZ');
      });

      it('should contain span[15] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[15].innerHTML).toContain('*');
        expect(spans[15].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[16] with \'576687090\'', () => {
        expect(spans[16].innerHTML).toContain('576687090');
      });

      it('should contain span[17] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[17].innerHTML).toContain('*');
        expect(spans[17].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[18] with \'251107\'', () => {
        expect(spans[18].innerHTML).toContain('251107');
      });

      it('should contain span[19] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[19].innerHTML).toContain('*');
        expect(spans[19].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[20] with \'1430\'', () => {
        expect(spans[20].innerHTML).toContain('1430');
      });

      it('should contain span[21] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[21].innerHTML).toContain('*');
        expect(spans[21].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[22] with \'^\'', () => {
        expect(spans[22].innerHTML).toContain('^');
      });

      it('should contain span[23] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[23].innerHTML).toContain('*');
        expect(spans[23].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[24] with \'00501\'', () => {
        expect(spans[24].innerHTML).toContain('00501');
      });

      it('should contain span[25] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[25].innerHTML).toContain('*');
        expect(spans[25].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[26] with \'000000905\'', () => {
        expect(spans[26].innerHTML).toContain('000000905');
      });

      it('should contain span[27] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[27].innerHTML).toContain('*');
        expect(spans[27].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[28] with \'0\'', () => {
        expect(spans[28].innerHTML).toContain('0');
      });

      it('should contain span[29] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[29].innerHTML).toContain('*');
        expect(spans[29].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[30] with \'T\'', () => {
        expect(spans[30].innerHTML).toContain('T');
      });

      it('should contain span[21] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[31].innerHTML).toContain('*');
        expect(spans[31].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[32] with \':\'', () => {
        expect(spans[32].innerHTML).toContain(':');
      });
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-x12-info'));
        debugElement.triggerEventHandler('mouseenter', {});
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'ISA Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        expect(tag[0].innerHTML).toContain('ISA Elements');
      });

      it('should contain value and description for \'ISA01\'', () => {
        expect(descriptions[0].textContent).toContain('ISA01:');
        expect(descriptions[0].textContent).toContain('00');
        expect(descriptions[0].textContent).toContain('type of authorization');
      });

      it('should contain value and description for \'ISA02:\'', () => {
        expect(descriptions[1].textContent).toContain('ISA02:');
        expect(descriptions[1].textContent).toContain('actual authorization info');
      });

      it('should contain value and description for \'ISA03\'', () => {
        expect(descriptions[2].textContent).toContain('ISA03:');
        expect(descriptions[2].textContent).toContain('00');
        expect(descriptions[2].textContent).toContain('type of security info');
      });

      it('should contain value and description for \'ISA04\'', () => {
        expect(descriptions[3].textContent).toContain('ISA04:');
        expect(descriptions[3].textContent).toContain('actual security info');
      });

      it('should contain value and description for \'ISA05\'', () => {
        expect(descriptions[4].textContent).toContain('ISA05:');
        expect(descriptions[4].textContent).toContain('ZZ');
        expect(descriptions[4].textContent).toContain('code identifying the sender\'s ID type');
      });

      it('should contain value and description for \'ISA06\'', () => {
        expect(descriptions[5].textContent).toContain('ISA06:');
        expect(descriptions[5].textContent).toContain('87790056');
        expect(descriptions[5].textContent).toContain('sender\'s ID');
      });

      it('should contain value and description for \'ISA07\'', () => {
        expect(descriptions[6].textContent).toContain('ISA07:');
        expect(descriptions[6].textContent).toContain('ZZ');
        expect(descriptions[6].textContent).toContain('code identifying the receiver\'s ID type');
      });

      it('should contain value and description for \'ISA08\'', () => {
        expect(descriptions[7].textContent).toContain('ISA08:');
        expect(descriptions[7].textContent).toContain('576687090');
        expect(descriptions[7].textContent).toContain('receiver\'s ID');
      });

      it('should contain value and description for \'ISA09\'', () => {
        expect(descriptions[8].textContent).toContain('ISA09:');
        expect(descriptions[8].textContent).toContain('11/07/2025');
        expect(descriptions[8].textContent).toContain('date in YYMMDD format');
      });

      it('should contain value and description for \'ISA10\'', () => {
        expect(descriptions[9].textContent).toContain('ISA10:');
        expect(descriptions[9].textContent).toContain('1430');
        expect(descriptions[9].textContent).toContain('time in HHMM format');
      });

      it('should contain value and description for \'ISA11\'', () => {
        expect(descriptions[10].textContent).toContain('ISA11:');
        expect(descriptions[10].textContent).toContain('^');
        expect(descriptions[10].textContent).toContain('control standards ID');
      });

      it('should contain value and description for \'ISA12\'', () => {
        expect(descriptions[11].textContent).toContain('ISA12:');
        expect(descriptions[11].textContent).toContain('00501');
        expect(descriptions[11].textContent).toContain('interchange control version number');
      });

      it('should contain value and description for \'ISA13\'', () => {
        expect(descriptions[12].textContent).toContain('ISA13:');
        expect(descriptions[12].textContent).toContain('000000905');
        expect(descriptions[12].textContent).toContain('interchange control number');
      });

      it('should contain value and description for \'ISA14\'', () => {
        expect(descriptions[13].textContent).toContain('ISA14:');
        expect(descriptions[13].textContent).toContain('0');
        expect(descriptions[13].textContent).toContain('acknowledgement requested');
      });

      it('should contain value and description for \'ISA15\'', () => {
        expect(descriptions[14].textContent).toContain('ISA15:');
        expect(descriptions[14].textContent).toContain('T');
        expect(descriptions[14].textContent).toContain('usage indicator');
      });

      it('should contain value and description for \'ISA16\'', () => {
        expect(descriptions[15].textContent).toContain('ISA16:');
        expect(descriptions[15].textContent).toContain(':');
        expect(descriptions[15].textContent).toContain('component element separator');
      });
    });
  });
});
