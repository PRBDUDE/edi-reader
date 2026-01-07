import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {Se} from './se';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('Se', () => {
  let component: Se;
  let fixture: ComponentFixture<Se>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Se]
    }).compileComponents();

    fixture = TestBed.createComponent(Se);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('SE*39*0001', () => {
    const testData = 'SE*39*0001';

    beforeEach(() => {
      fixture.componentRef.setInput('seData', testData);
      fixture.componentRef.setInput('seSegmentDelimiter', '~');
      fixture.componentRef.setInput('seElementDelimiter', '*');
      fixture.componentRef.setInput('seSubElementDelimiter', ':');
      fixture.componentRef.changeDetectorRef.detectChanges();
      fixture.detectChanges();
    });

    it('should contain data', () => {
      expect(component.seData()).toContain(testData);
    });

    it('should contain segment delimiter', () => {
      expect(component.seSegmentDelimiter()).toEqual('~');
    });

    it('should contain element delimiter', () => {
      expect(component.seElementDelimiter()).toEqual('*');
    });

    it('should contain sub element delimiter', () => {
      expect(component.seSubElementDelimiter()).toEqual(':');
    });

    describe('check contents of html tag', () => {
      let compiled: HTMLElement;
      let spans: HTMLCollectionOf<HTMLSpanElement>;

      beforeEach(() => {
        compiled = fixture.nativeElement;
        spans = compiled.getElementsByTagName('span');
      });

      it('should contain class \'prb-x12-transaction-set\'', () => {
        expect(compiled.querySelector('div')?.className).toContain('prb-x12-transaction-set');
      });

      it('should contain span[0] with \'SE\'', () => {
        expect(spans[0].innerHTML).toContain('SE');
      });

      it('should contain span[1] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[1].innerHTML).toContain('*');
        expect(spans[1].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[2] with \'39\'', () => {
        expect(spans[2].innerHTML).toContain('39');
      });

      it('should contain span[3] with \'*\' and class \'prb-12-element-delimiter\'', () => {
        expect(spans[3].innerHTML).toContain('*');
        expect(spans[3].className).toContain('prb-12-element-delimiter');
      });

      it('should contain span[4] with \'0001\'', () => {
        expect(spans[4].innerHTML).toContain('0001');
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

      it('should contain \'SE Elements\'', () => {
        const tag = compiled.querySelectorAll('h5');
        console.log('TAG: ' + tag[0].innerHTML);
        expect(tag[0].innerHTML).toEqual('SE Elements');
      });

      it('should contain value and description for \'SE01\'', () => {
        expect(descriptions[0].textContent).toContain('SE01:');
        expect(descriptions[0].textContent).toContain('39');
        expect(descriptions[0].textContent).toContain('number of included segments');
      });

      it('should contain value and description for \'SE02\'', () => {
        expect(descriptions[1].textContent).toContain('SE02:');
        expect(descriptions[1].textContent).toContain('0001');
        expect(descriptions[1].textContent).toContain('transaction set control number');
      });
    });
  });
});
