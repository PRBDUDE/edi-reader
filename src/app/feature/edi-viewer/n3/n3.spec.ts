import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {N3} from './n3';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('N3', () => {
  let component: N3;
  let fixture: ComponentFixture<N3>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [N3]
    }).compileComponents();

    fixture = TestBed.createComponent(N3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('N3*100 MAIN ST', () => {
    const testData = 'N3*100 MAIN ST';

    beforeEach(() => {
      fixture.componentRef.setInput('n3Data', testData);
      fixture.componentRef.setInput('n3SegmentDelimiter', '~');
      fixture.componentRef.setInput('n3ElementDelimiter', '*');
      fixture.componentRef.setInput('n3SubElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.n3Data()).toContain(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.n3SegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.n3ElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.n3SubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLSpanElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'N3\'"', () => {
        expect(spans[0].innerHTML).toContain('N3');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'100 MAIN ST\'', () => {
        expect(spans[2].innerHTML).toContain('100 MAIN ST');
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
        compiled = fixture.nativeElement;
        descriptions = compiled.querySelectorAll('prb-element-description');
        console.log(compiled.innerHTML);
      }));

      it('should contain \'N3 Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('N3 Elements');
      });

      it('should contain value and description for \'N301\'', () => {
        expect(descriptions[0].textContent).toContain('N301:');
        expect(descriptions[0].textContent).toContain('100 MAIN ST');
        expect(descriptions[0].textContent).toContain('address1');
      });
    })
  });
});
