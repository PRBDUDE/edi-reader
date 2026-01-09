import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Bgn} from './bgn';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Bgn', () => {
  let component: Bgn;
  let fixture: ComponentFixture<Bgn>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Bgn]
    }).compileComponents();

    fixture = TestBed.createComponent(Bgn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('BGN*00*345678*20251210*1440', () => {
    const testData = 'BGN*00*345678*20251210*1440';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
      console.log('DATA: ' + fixture.componentRef.instance.data());
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
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.querySelectorAll('span') as unknown as HTMLCollectionOf<HTMLElement>;
        console.log(compiled.innerHTML);
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'BGN\'', () => {
        expect(spans[0].innerHTML).toContain('BGN');
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

      it('should contain span[4] with \'345678\'', () => {
        expect(spans[4].innerHTML).toContain('345678');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'20251210\'', () => {
        expect(spans[6].innerHTML).toContain('20251210');
      });

      it('should contain span[7] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[8] with \'1440\'', () => {
        expect(spans[8].innerHTML).toContain('1440');
      });
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
        console.log(compiled.innerHTML);
      }));

      it('should contain \'BGN Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('BGN Elements');
      });

      it('should contain value and description for \'BGN01\'', () => {
        expect(descriptions[0].textContent).toContain('00');
        expect(descriptions[0].textContent).toContain('transaction set purpose code');
      });

      it('should contain value and description for \'BGN02\'', () => {
        expect(descriptions[1].textContent).toContain('345678');
        expect(descriptions[1].textContent).toContain('control number for the transaction set');
      });

      it('should contain value and description for \'BGN03\'', () => {
        expect(descriptions[2].textContent).toContain('12/10/2025');
        expect(descriptions[2].textContent).toContain('transaction set creation date');
      });

      it('should contain value and description for \'BGN04\'', () => {
        expect(descriptions[3].textContent).toContain('1440');
        expect(descriptions[3].textContent).toContain('transaction set creation time');
      });
    });
  });
});
