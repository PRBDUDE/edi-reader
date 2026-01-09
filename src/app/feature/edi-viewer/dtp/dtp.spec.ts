import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Dtp} from './dtp';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Dtp', () => {
  let component: Dtp;
  let fixture: ComponentFixture<Dtp>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Dtp]
    }).compileComponents();

    fixture = TestBed.createComponent(Dtp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('DTP*007*D8*20241205', () => {
    const testData = 'DTP*007*D8*20241205'

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
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

      it('should contain span[0] with \'DTP\'', () => {
        expect(spans[0].innerHTML).toContain('DTP');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'007\'', () => {
        expect(spans[2].innerHTML).toContain('007');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'D8\'', () => {
        expect(spans[4].innerHTML).toContain('D8');
      })

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'20241205\'', () => {
        expect(spans[6].innerHTML).toContain('20241205');
      });
    });

    describe('check contents of html on hover', () => {
      let compiled: HTMLElement;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'DTP Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        expect(tag[0].innerHTML).toEqual('DTP Elements');
      });

      it('should contain value and description for \'DTP01\'', () => {
        expect(descriptions[0].textContent).toContain('DTP01:');
        expect(descriptions[0].textContent).toContain('007');
        expect(descriptions[0].textContent).toContain('effective date');
      });

      it('should contain value and description for \'DTP02\'', () => {
        expect(descriptions[1].textContent).toContain('DTP02:');
        expect(descriptions[1].textContent).toContain('D8');
        expect(descriptions[1].textContent).toContain('YYYYMMDD');
      });

      it('should contain value and description for \'DTP03\'', () => {
        expect(descriptions[2].textContent).toContain('DTP03:');
        expect(descriptions[2].textContent).toContain('12/05/2024');
        expect(descriptions[2].textContent).toContain('date');
      });
    });
  });
});
