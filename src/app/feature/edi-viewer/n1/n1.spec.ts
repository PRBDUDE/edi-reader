import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {N1} from './n1';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('N1', () => {
  let component: N1;
  let fixture: ComponentFixture<N1>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [N1]
    }).compileComponents();

    fixture = TestBed.createComponent(N1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('N1*P5*ACME EMPLOYER', () => {
    const testData = 'N1*P5*ACME EMPLOYER';

    beforeEach(() => {
      fixture.componentRef.setInput('n1Data', testData);
      fixture.componentRef.setInput('n1SegmentDelimiter', '~');
      fixture.componentRef.setInput('n1ElementDelimiter', '*');
      fixture.componentRef.setInput('n1SubElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.n1Data()).toEqual(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.n1SegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.n1ElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.n1SubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
        console.log(compiled.innerHTML);
      });

      it('should contain class \'prb-x12-segment\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-segment');
      });

      it('should contain span[0] with \'N1\'', () => {
        expect(spans[0].innerHTML).toContain('N1');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      })

      it('should contain span[2] with \'P5\'', () => {
        expect(spans[2].innerHTML).toContain('P5');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'ACME EMPLOYER\'', () => {
        expect(spans[4].innerHTML).toContain('ACME EMPLOYER');
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

      it('should contain \'N1 Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('N1 Elements');
      });

      it('should contain value and description for \'N101\'', () => {
        expect(descriptions[0].textContent).toContain('N101:');
        expect(descriptions[0].textContent).toContain('P5');
        expect(descriptions[0].textContent).toContain('entity identifier code');
      });

      it('should contain value and description for \'N102\'', () => {
        expect(descriptions[1].textContent).toContain('N102:');
        expect(descriptions[1].textContent).toContain('ACME EMPLOYER');
        expect(descriptions[1].textContent).toContain('identification code qualifier');
      })
    });
  });
});
