import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Hd} from './hd';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Hd', () => {
  let component: Hd;
  let fixture: ComponentFixture<Hd>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Hd]
    }).compileComponents();

    fixture = TestBed.createComponent(Hd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HD*030**HLT*PLAN34', () => {
    const testData = 'HD*030**HLT*PLAN34';

    beforeEach(() => {
      fixture.componentRef.setInput('hdData', testData);
      fixture.componentRef.setInput('hdSegmentDelimiter', '~');
      fixture.componentRef.setInput('hdElementDelimiter', '*');
      fixture.componentRef.setInput('hdSubElementDelimiter', ':');
      fixture.detectChanges();
      console.log('DATA: ' + component.hdData());
    });

    it('should contain data', () => {
      expect(component.hdData()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.hdSegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.hdElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.hdSubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'HD\'', () => {
        expect(spans[0].innerHTML).toContain('HD');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'030\'', () => {
        expect(spans[2].innerHTML).toContain('030');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[5] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[5].innerHTML).toContain('*');
        expect(spans[5].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[6] with \'HLT\'', () => {
        expect(spans[6].innerHTML).toContain('HLT');
      });

      it('should contain span[7] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[7].innerHTML).toContain('*');
        expect(spans[7].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[8] with \'PLAN34\'', () => {
        expect(spans[8].innerHTML).toContain('PLAN34');
      })
    });

    describe('check contents of html tag on hover', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;
      let debugElement: DebugElement;
      let descriptions: NodeListOf<HTMLElement>;

      beforeEach(fakeAsync(() => {
        debugElement = fixture.debugElement.query(By.css('.prb-info'));
        debugElement.triggerEventHandler('mouseenter', null);
        tick();
        fixture.detectChanges();
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'HD Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('HD Elements');
      });

      it('should contain value and description for \'HD01\'', () => {
        expect(descriptions[0].textContent).toContain('HD01:');
        expect(descriptions[0].textContent).toContain('030');
        expect(descriptions[0].textContent).toContain('enrollment type code');
      });

      it('should contain value and description for \'HD03\'', () => {
        expect(descriptions[1].textContent).toContain('HD03:');
        expect(descriptions[1].textContent).toContain('HLT');
        expect(descriptions[1].textContent).toContain('plan type code');
      });

      it('should contain value and description for \'HD04\'', () => {
        expect(descriptions[2].textContent).toContain('HD04');
        expect(descriptions[2].textContent).toContain('PLAN34');
        expect(descriptions[2].textContent).toContain('plan level code');
      });
    })
  });
});
