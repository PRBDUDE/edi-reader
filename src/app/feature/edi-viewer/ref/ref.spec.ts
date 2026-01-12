import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Ref} from './ref';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Ref', () => {
  let component: Ref;
  let fixture: ComponentFixture<Ref>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Ref]
    }).compileComponents();

    fixture = TestBed.createComponent(Ref);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('REF*1L*SUBPLAN02', () => {
    const testData = 'REF*1L*SUBPLAN02';

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
      expect(component.segmentDelimiter()).toContain('~');
    });

    it('should contain element delimiter', () => {
      expect(component.elementDelimiter()).toContain('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.subElementDelimiter()).toContain(':');
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

      it('should contain span[0] with \'REF\'', () => {
        expect(spans[0].innerHTML).toContain('REF');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'1L\'', () => {
        expect(spans[2].innerHTML).toContain('1L');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'SUBPLAN02\'', () => {
        expect(spans[4].innerHTML).toContain('SUBPLAN02');
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
      }));

      it('should contain \'REF Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        expect(tag[0].innerHTML).toEqual('REF Elements');
      });

      it('should contain value and description for \'REF01\'', () => {
        expect(descriptions[0].textContent).toContain('REF01:');
        expect(descriptions[0].textContent).toContain('1L');
        expect(descriptions[0].textContent).toContain('reference identifier qualifier');
      });

      it('should contain value and description for \'REF02\'', () => {
        expect(descriptions[1].textContent).toContain('REF02:');
        expect(descriptions[1].textContent).toContain('SUBPLAN02');
        expect(descriptions[1].textContent).toContain('reference identification');
      });
    })
  });
});
