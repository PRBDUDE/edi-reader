import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {N4} from './n4';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('N4', () => {
  let component: N4;
  let fixture: ComponentFixture<N4>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [N4]
    }).compileComponents();

    fixture = TestBed.createComponent(N4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('N4*ANYTOWN*CA*90210', () => {
    const testData = 'N4*ANYTOWN*CA*90210';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.data()).toContain(testData);
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

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'N4\'', () => {
        expect(spans[0].innerHTML).toContain('N4');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'ANYTOWN\'', () => {
        expect(spans[2].innerHTML).toContain('ANYTOWN');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'CA\'', () => {
        expect(spans[4].innerHTML).toContain('CA');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'90210\'', () => {
        expect(spans[6].innerHTML).toContain('90210');
      });
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-x12-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'N4 Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        expect(tag[0].innerHTML).toEqual('N4 Elements');
      });

      it('should contain value and description for \'N401\'', () => {
        expect(descriptions[0].textContent).toContain('N401:');
        expect(descriptions[0].textContent).toContain('ANYTOWN');
        expect(descriptions[0].textContent).toContain('city name');
      });

      it('should contain value and description for \'N402\'', () => {
        expect(descriptions[1].textContent).toContain('N402:');
        expect(descriptions[1].textContent).toContain('CA');
        expect(descriptions[1].textContent).toContain('state or province code');
      });

      it('should contain value and description for \'N403\'', () => {
        expect(descriptions[2].textContent).toContain('N403:');
        expect(descriptions[2].textContent).toContain('90210');
        expect(descriptions[2].textContent).toContain('postal code');
      });
    });
  });
});
