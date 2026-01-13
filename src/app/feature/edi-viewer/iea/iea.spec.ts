import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Iea} from './iea';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Iea', () => {
  let component: Iea;
  let fixture: ComponentFixture<Iea>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Iea]
    }).compileComponents();

    fixture = TestBed.createComponent(Iea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('IEA*1*000000937', () => {
    const testData = 'IEA*1*000000937';

    beforeEach(() => {
      fixture.componentRef.setInput('data', testData);
      fixture.componentRef.setInput('segmentDelimiter', '~');
      fixture.componentRef.setInput('elementDelimiter', '*');
      fixture.componentRef.setInput('subElementDelimiter', ':');
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
        compiled = fixture.nativeElement as HTMLElement;
        spans = compiled.getElementsByTagName('span') as unknown as HTMLCollectionOf<HTMLElement>;
      });

      it('should contain class \'prb-x12-loop-1000\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-loop-1000');
      });

      it('should contain span[0] with \'IEA\'', () => {
        expect(spans[0].innerHTML).toContain('IEA');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'1\'', () => {
        expect(spans[2].innerHTML).toContain('1');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'000000937\'', () => {
        expect(spans[4].innerHTML).toContain('000000937');
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
        compiled = fixture.nativeElement as HTMLElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
      }));

      it('should contain \'IEA Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        expect(tag[0].innerHTML).toEqual('IEA Elements');
      });

      it('should contain value and description for \'IEA01\'', () => {
        expect(descriptions[0].textContent).toContain('IEA01:');
        expect(descriptions[0].textContent).toContain('1');
        expect(descriptions[0].textContent).toContain('number of groups');
      });

      it('should contain value and description for \'IEA02\'', () => {
        expect(descriptions[1].textContent).toContain('IEA02:');
        expect(descriptions[1].textContent).toContain('000000937');
        expect(descriptions[1].textContent).toContain('interchange control number');
      });
    })
  })
});
